"use strict";

/** Routes for users. */

const express = require("express");
const jsonschema = require("jsonschema");
const { BadRequestError } = require("../expressError");
const User = require("../models/user");
const { ensureLoggedIn, isAdmin, ensureCorrectUser } = require("../middleware/auth"); // Import isAdmin middleware

const userNewSchema = require("../schemas/userNew.json");
const userUpdateSchema = require("../schemas/userUpdate.json");

const router = new express.Router();

/** POST / { user } =>  { user }
 *
 * user should be { username, password, firstName, lastName, email, isAdmin }
 *
 * Returns { username, firstName, lastName, email, isAdmin }
 *
 * Authorization required: Admin
 */
router.post("/", isAdmin, async (req, res, next) => {
  try {
    const validator = jsonschema.validate(req.body, userNewSchema);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }

    const user = await User.register(req.body);
    return res.status(201).json({ user });
  } catch (err) {
    return next(err);
  }
});

/** GET / => { users: [ {username, firstName, lastName, email }, ... ] }
 *
 * Returns list of all users.
 *
 * Authorization required: login
 **/

router.get("/", isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll();
    return res.json({ users });
  } catch (err) {
    return next(err);
  }
});


/** GET /[username] => { user }
 *
 * Returns { username, firstName, lastName, isAdmin }
 *
 * Authorization required: login
 **/

router.get("/:username", isAdmin, ensureCorrectUser, async (req, res, next) => {

  try {
    const user = await User.get(req.params.username);
    return res.json({ user });
  } catch (err) {
    return next(err);
  }
});


/** PATCH /[username] { user } => { user }
 *
 * Data can include:
 *   { firstName, lastName, password, email }
 *
 * Returns { username, firstName, lastName, email, isAdmin }
 *
 * Authorization required: login
 **/

router.patch("/:username", isAdmin, ensureCorrectUser, async (req, res, next) => {
  try {
    const validator = jsonschema.validate(req.body, userUpdateSchema);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }

    const user = await User.update(req.params.username, req.body);
    return res.json({ user });
  } catch (err) {
    return next(err);
  }
});


/** DELETE /[username]  =>  { deleted: username }
 *
 * Authorization required: login
 **/

router.delete("/:username", isAdmin, ensureCorrectUser, async (req, res, next) => {
  try {
    await User.remove(req.params.username);
    return res.json({ deleted: req.params.username });
  } catch (err) {
    return next(err);
  }
});


/** POST /users/:username/jobs/:id => { applied: jobId } Part 5
*
* Authorization required: login
**/
router.post("/:username/jobs/:id", async function (req, res, next) {
  try {
    const { username, id } = req.params;
    const result = await User.applyForJob(username, id);
    return res.json({ applied: result.job_id });
  } catch (err) {
    return next(err);
  }
});

/** GET /users/:username => { user }
 *
 * Returns { username, firstName, lastName, isAdmin, jobs }
 *
 * Authorization required: login
 **/
router.get("/:username", isAdmin, ensureCorrectUser, async (req, res, next) => {
  try {
    const user = await User.get(req.params.username);
    return res.json({ user: { ...user, jobs: user.appliedJobs } });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;

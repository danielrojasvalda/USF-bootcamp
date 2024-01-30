import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

test('clicking left arrow moves to previous image', () => {
  // Set up the initial state where you are on the second image
  const { getByTestId, container } = render(<Carousel photos={yourPhotos} title="Your Title" />);
  
  // Find the left arrow element by its data-testid attribute
  const leftArrow = getByTestId('left-arrow');

  // Trigger a click on the left arrow
  fireEvent.click(leftArrow);

  // Ensure that the active image is now the first image
  expect(
    container.querySelector('img[alt="Caption for Image 1"]') // Replace with your actual alt text
  ).toBeInTheDocument();
});

test('left arrow is missing on the first image', () => {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  // Ensure left arrow is not present
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  expect(leftArrow).not.toBeInTheDocument();
});



export function choice(items) {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  }
  
  export function remove(items, item) {
    const index = items.indexOf(item);
    if (index !== -1) {
      return items.splice(index, 1)[0];
    }
    return undefined;
  }
  
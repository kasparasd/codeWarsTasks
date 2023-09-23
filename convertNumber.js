function digitize(n) {
    const numToArray = Array.from(String(n), Number);

    return numToArray.reverse();
  }

  digitize(35231);
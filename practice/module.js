function isExist(itemList, targetItem) {
  for (var index = 0; index < itemList.length; index++) {
    if (itemList[index] === targetItem) {
      return (targetItem += "found! At index" + index);
    }
  }
  return "item not found";
}
module.exports = { isExist };

function PaginationHelper(collection, itemsPerPage) {
    this.itemsPerPage = itemsPerPage
    this.iCount = collection.length
    this.pCount = Math.ceil(collection.length / itemsPerPage)
    this.splitCollection = []
    for (let i = 0; i < collection.length; i++) {
        const index = Math.floor(i / itemsPerPage)
        if (this.splitCollection[index] !== undefined) {
            this.splitCollection[index].push(collection[i])
        } else {
            this.splitCollection[index] = [collection[i]]
        }
    }

    console.log(this.splitCollection);
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
    return this.iCount
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
    return this.pCount
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
        if (this.pCount === 0 || pageIndex < 0 || pageIndex >= this.pCount) {
            return -1
        } else {
            return this.splitCollection[pageIndex].length
        }
    }
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
    if (this.iCount === 0 || itemIndex < 0 || itemIndex >= this.iCount) {
        return -1
    } else {
        return Math.floor(itemIndex / this.itemsPerPage)
    }
}
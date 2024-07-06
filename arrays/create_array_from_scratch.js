class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index]
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    pop() {
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--;
        return lastItem;
    }
    delete(index) {
        const item = this.data[index]
        this.shiftItem(index);
    }


    shiftItem(index) {
        for (let i = index; index < this.length - 1; index++) {

            this.data[i] = this.data[i + 1];

        }
        delete this.data[this.length - 1]
        this.length--;
    }
}


const newArray = new MyArray();
newArray.push('hi')
newArray.push('my')
newArray.push('name')
newArray.push('is')
newArray.push('sachin')
newArray.delete(3)
console.log(newArray)
function Stack() {
    this.arr = [];
    this.push = function(ele) {
        this.arr.push(ele);
    }

    this.pop = function() {
        if(arr.length) {
            this.arr.pop();
        } else {
            return null
        }

    }
    this.size = this.arr.length;
    this.isEmpty = () => this.arr.length === 0;
}
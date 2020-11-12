window.onload = function() {
    // console.log("numWays(2)", numWays(2));
    /* const arr = [1,2,3,4];
    exchange(arr) */
    /* var str = "leetcode";
    console.log(str, firstUniqChar(str)); */
    /* var s = "     ";
    replaceSpace(s); */
    // myPow(2.00000, 10)
    console.log("maxChildStr('pwwkew')", maxChildStr('pwwkew'));
}

function longestPalindrome(s) {
    if(!s || !s.length) return s;
    let res = s[0];
    const dp = [];
    const length = s.length;
    for(let i = length - 1; i >=0; i--) {
        dp[i] = [];
        for(let j = i; j < length; j++) {
            const conditOnly =  i === j;

            if( conditOnly || (s[i]=== s[j] && j-i === 1) || (s[i] === s[j] && dp[i+1][j-1])) {
                dp[i][j] = true;
            }
            
            if(dp[i][j] && j-i+1 > res.length) {
                res = s.slice(i, j+1);
            }
        }
    }

    return res;
}
/* 
var cache = [0, 1];
var fib = function(n) {
    if(n < 0) return 0;
    if(typeof cache[n] != "undefined") return cache[n];
    cache[n] =  fib(n-1) + fib(n -2);

    
    return cache[n] % 1000000007;
}; */

var cache = [1, 1];
var numWays = function(n) {
    if(cache[n]) return cache[n];
    cache[n] = numWays[n-1] + numWays[n-2];
    return cache[n] % 1000000007;
};

function exchange(nums) {
    var left = 0;
    var right = nums.length - 1;
    let temp;
    while(left <= right) {
        while(nums[left] % 2 === 1) {
            left++;
        }

        while(nums[right] % 2 ===0) {
            right--;
        }

        temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
    }
    return nums;
};

var exchange = function(nums) {
    var left = 0;
    var right = nums.length - 1;
    let temp;
    while(left <= right) {
        if(nums[left] % 2 === 0 && nums[right] % 2 ===1) {
            temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
        }
        if(nums[left] % 2 === 1) {
            left++;
        }

        if(nums[right] % 2 ===0) {
            right--;
        }
    }
    console.log("res", nums);
    return nums;
};

var firstUniqChar = function(s) {
    var strArr = s.split('');
    var map = new Map();
    var isEmpty = true;
    strArr.forEach(charCode => {
        var pre = map.has(charCode);
        
        map.set(charCode, pre ? false : true );
    })

    for(let i = 0, len = strArr.length; i < len; i++) {
        if(map.get(strArr[i])) {
            isEmpty = false;
            return strArr[i];
        }
    }

    if(isEmpty) return ' ';
};

function replaceSpace(s) {
    var res = '';
    var tempArr = s.split('');
    console.log("tempArr", tempArr);
    for(let i=0, len =tempArr.length; i<len; i++) {
        var temp = tempArr[i];
        if(typeof temp === 'string' && !temp) {
            res += '%20';
        }
    }
    return res;
};

var myPow = function(x, n) {
    if(!n) return 1;
    if(x === 1) return 1;
    var isNagetive = n < 0;
    var power = isNagetive ? -n : n;
    console.log("x, n", x, n);
    return isNagetive ? 1 / calc(x, power) : calc(x, power);
};

/* const map = new Map();
if(map.has(power)) return map.get(power); */

function calc(base, power) {
    console.log("base, power", base, power)
    var half = Math.floor(power / 2);

    if(power === 1) return base;
    if(power === 2) return base * base;
    return calc(base, half) * calc(base, power-half);
}


/**
 *  最长不含重复字符的子字符串
 * @param {*} s
 * @returns
 */
function maxChildStr(s) {
    var length = s.length;
    if(length <= 1) {
        return length;
    }

    var max = 1;
    var head = 0;
    var tail = 1;
    var index = -1;
    while(tail < length) {
        index = s.substring(head, tail).indexOf(s[tail]);
        if(index > -1) {
            head += index + 1;
        } else {
            
            if(tail - head + 1 > max) max = tail-head + 1;
            tail++;
        }
    }
    return max;
}

/** 
 * 股票最大利润
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(!Array.isArray(prices) || (Array.isArray(prices) && prices.length < 2)) {
        return 0;
    }
    let maxProfit = 0;
    let min = prices[0];
    for(let i =1; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - min);
    }

    return maxProfit;
};
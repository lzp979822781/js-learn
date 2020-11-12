"use strict";
window.onload = function() {
    initMap();
    // initList();
}

function initMap() {
    navigator.geolocation.getCurrentPosition(function(position) {
        var latlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
        var myOptions = {
          zoom: 8,
          center: latlng,
          mapTypeId: google.maps.MapTypeId.TERRAIN,
          disableDefaultUI: true
        }
        var map = new google.maps.Map(document.querySelector("#map_canvas"), myOptions);
    });
}

/**
 * 测试数据[2,4,3] [5,6,4]
 *
 * @param {*} val
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

function initList(arr) {
    let head;
    let current;
    let prev;
    for(let [index, elem] of arr) {
        current = new ListNode(elem);
        if(index === 0) {
            head = current;
            prev = current;
        } else {
            prev.next = current;
        }
    }
}

function transToArray(listNode) {
    let res = [];
    do {
        res.push(listNode.val);
    } while(listNode.next !== null)
}


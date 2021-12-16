/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 83 NodeList looks like array but not, so giving runtime error, not expected return type

 var deleteDuplicates = function(head) {
    let sortedHead = [];
    let x = null;
    for(let i =0 ; i < head.length ; i++) {
        if (head[i] !== x ) {
            sortedHead.push(head[i])
            x = head[i]
        }
    }
    return sortedHead;
};
console.log(deleteDuplicates([1,1,2,2,2,3,4,5,6,7,8,9,9,9,9,10]))
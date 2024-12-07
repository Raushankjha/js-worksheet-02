# video-link : https://vimeo.com/1037026325/770c3197f3?ts=0&share=copy


# Q1 -debug-code fix-

function fetchUser(callback) {
    setTimeout(() => {
        const user = null; // Should fetch a valid user object
        callback(user); // Bug: Cannot read property 'name'
    }, 1000);
}

fetchUser((name) => console.log(name));
fix

# Q2:

const nums = [10, 20, 30];
const result = nums.map((n) => n / 0).filter((n) => n > 0);
const sum = result.reduce((acc, curr) => acc + curr, 0);
console.log(sum)

# Q3:

const chars = "aabbc";
const freq = chars.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
}, {});
console.log(freq);

# Q4

const nums = [1, 10, 2];
nums.sort((a,b)=>{return a-b;}); // Bug: Incorrect numeric sorting
console.log(nums);


const url1 = "https://jsonplaceholder.typicode.com/users";
const url2 = "https://jsonplaceholder.typicode.com/posts";

const firstData = fetch(url1).then((res) => res.json());
const secondData = fetch(url2).then((res) => res.json());


secondData
    .then((res) => {
        setTimeout(() => {
            res.forEach((ele) => {
                console.log("Post:", ele);
            });
        }, 10000); // 10-second delay
    })
    .catch((err) => console.error("Error fetching posts:", err));

// Handle firstData immediately
firstData
    .then((res) => {
        res.forEach((ele) => {
            console.log("User:", ele);
        });
    })
    .catch((err) => console.error("Error fetching users:", err));



document.getElementById('discover-btn')
    .addEventListener('click', function () {
        window.location.href = "Blog.html";
    });
const completedBtns = document.getElementsByClassName('completed-btn');
const checkboxButton1 = document.getElementById('checkbox-button-1');
const checkboxButton2 = document.getElementById('checkbox-button-2');
checkboxButton2.innerText = completedBtns.length;
for (let completedBtn of completedBtns) {
    completedBtn.addEventListener('click', function () {
        let checkboxButton2Value = parseInt(checkboxButton2.innerText);
        if (checkboxButton2Value === 1) {
            alert("Board Updated Successfully");
            alert("Congratulations!!! You have completed all the tasks");
        } else {
            alert("Board Updated Successfully");
        }
        checkboxButton2.innerText = checkboxButton2Value - 1;
        checkboxButton1.innerText = parseInt(checkboxButton1.innerText) + 1;
        completedBtn.setAttribute("disabled", "true");
        completedBtn.classList.add("opacity-50", "cursor-not-allowed");
        const addListItems = document.getElementById('add-list');
        const div = document.createElement('div');
        div.classList.add("new-add-list");
        const taskName = completedBtn.closest(".task-item").querySelector("p").innerText;
        const myTime = new Date().toLocaleTimeString();
        div.innerHTML = `
            <p class="added p-2 bg-slate-100 rounded-lg m-1">
                You have completed the task "${taskName}" at ${myTime}
            </p>
        `;

        addListItems.appendChild(div);
    });
}
document.getElementById("clear-btn").addEventListener('click', function () {
    document.getElementById('add-list').innerHTML = "";
});
document.getElementById('checkbox-date').innerText = new Date().toDateString();
document.getElementById('theme-btn').addEventListener('click', function () {
    const body = document.getElementById('body-tag');

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    function rgbToHex(r, g, b) {
        return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
    }

    const colorHexValue = rgbToHex(r, g, b);
    body.style.backgroundColor = colorHexValue;
});

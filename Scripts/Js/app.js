import userData from "./employeeData.js";
/*
  /   -> root drive
  ./  -> current folder
  ../ -> parent folder
*/
let backdrop = document.getElementById("backdrop");
let userMainInfos = document.getElementById("ModalTest");
let arr = [];
const renderModalBox = () => {
   
    let showModalBox = arr.reduce((acc, curentValue) => {
        return (
            acc +
            `
            <span class="close" id="close-modal-box-btn">&times;</span>

            <div class="flex flex-wrap">
              <div class="wrapper md:flex">
              <div class="w-full md:w-1/2">
              
              <img src="${curentValue.avatar}" alt="user picture" class="rounded-full"/>
              <p> ${curentValue.description}</p> 
                 
                </div>
                <div class="w-full md:w-1/2">
                  <div class="user-name text-center font-semibold text-5xl">
                    ${curentValue.name}
                  </div>
                  <div class="flex justify-evenly w-full m-1">
                    <button class="btn btn-blue m-1" id="hardSkilsBtn">
                      Hard Skils
                    </button>
                    <button class="btn btn-blue m-1" id="softSkilsBtn">
                      Soft Skils
                    </button>
                  </div>
                  <div class="relative p-3 hidden" id="softSkils">
                    <div
                      class="overflow-hidden h-3 mb-4 text-xs flex rounded bg-pink-200"
                    >
                      <div
                        style="width: 30%;"
                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
                      >
                      ${curentValue.skils.hardSkils.skil3}
                                              </div>
                    </div>
                    <div
                      class="overflow-hidden h-3 mb-4 text-xs flex rounded bg-red-200"
                    >
                      <div
                        style="width: 50%;"
                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                      >
                      ${curentValue.skils.hardSkils.skil3}

                      </div>
                    </div>
                    <div
                      class="overflow-hidden h-3 mb-4 text-xs flex rounded bg-blue-200"
                    >
                      <div
                        style="width: 80%;"
                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                      >
                      ${curentValue.skils.hardSkils.skil3}
                      </div>
                    </div>
                  </div>
                  <!-- hard skils -->
                  <div class="relative p-3 hidden" id="hardSkils">
                    <div
                      class="overflow-hidden h-3 mb-4 text-xs flex rounded bg-pink-200"
                    >
                      <div
                        style="width: 30%;"
                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
                      >
                      ${curentValue.skils.hardSkils.skil1}
                      </div>
                    </div>
                    <div
                      class="overflow-hidden h-3 mb-4 text-xs flex rounded bg-red-200"
                    >
                      <div
                        style="width: 50%;"
                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                      >
                      ${curentValue.skils.hardSkils.skil2}
                      </div>
                    </div>
                    <div
                      class="overflow-hidden h-3 mb-4 text-xs flex rounded bg-blue-200"
                    >
                      <div
                        style="width: 80%;"
                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                      >
                        ${curentValue.skils.hardSkils.skil3}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-evenly">
              <a href="${curentValue.links.git}" class="hover:text-red-800">Git</a>
              <a href="${curentValue.links.linkedin}" class="hover:text-red-800">Linkedin</a>
              <a href="${curentValue.links.facebook}" class="hover:text-red-800">Facebook</a>
            </div>
            `
        );
    }, " ");
    userMainInfos.innerHTML = showModalBox;
}




const checkId = (id) => {
    userData.forEach(el => {
        if (id === el.id) {
            arr = [el];
        }
    });
}

function toogleBackdrop(event) {
    let userTargetId = parseInt(event.currentTarget.getAttribute("data-userId"));
    checkId(userTargetId);
    backdrop.classList.toggle("hidden");
    backdrop.classList.toggle("flex");
    renderModalBox();
    closebtn();

    addEventListener("click", closebtn);
}

const showModal = () => {
    backdrop.classList.toggle("hidden");
    backdrop.classList.toggle("flex");
}

window.addEventListener("load", getBtns);

function getBtns() {
    const employeeBtn = document.getElementsByClassName("userId");
    for (let btn of employeeBtn) {
        btn.addEventListener('click', toogleBackdrop);
    }
}

function closebtn() {
    document.getElementById("close-modal-box-btn").addEventListener("click", showModal);
    document.getElementById("hardSkilsBtn").addEventListener("click", hardSkilsBtn);
    document.getElementById("softSkilsBtn").addEventListener("click", softSkilsBtn);
}

window.onclick = event => {
    if (event.target === backdrop) {
        showModal();
    }
}

function hardSkilsBtn() {
    let hardSkilsUser = document.getElementById("hardSkils")
    hardSkilsUser.classList.toggle("hidden");
}

function softSkilsBtn() {
    let softSkils = document.getElementById("softSkils");
    softSkils.classList.toggle("hidden");
}
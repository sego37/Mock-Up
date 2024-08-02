import { useEffect, useState } from "react";

function Portfolio() {

    const [currentCard, setCurrentCard] = useState(1)

  const cards = [
    {
      id: "card-1",
      name: "First Profile",
      description: "My First profile page: This shows my skills of design at an early stage of my programing journey. Github link: https://github.com/sego37/First-Profile",
      imgUrl: "https://private-user-images.githubusercontent.com/63138641/312984382-afbc2f50-ca66-49ee-9fdf-ba5b0aab5f30.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjI1NjI5MDMsIm5iZiI6MTcyMjU2MjYwMywicGF0aCI6Ii82MzEzODY0MS8zMTI5ODQzODItYWZiYzJmNTAtY2E2Ni00OWVlLTlmZGYtYmE1YjBhYWI1ZjMwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA4MDIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwODAyVDAxMzY0M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWNmOTIwYjNmZDY5ZGM2N2VmNDI1MjA3NDBiYzVmODFlZmMwMmE1OWNmMzQ3ODlkNDRhOWIwZTUwNTkyOTZmMjImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.-kZWXrkfLmdEzbZBsH3JSvyCrD8sUmOKIip2_bHDoWs",
    },
    {
      id: "card-2",
      name: "Weather Dashboard",
      description: "Weather Dashboard: This is a weather dashboard that allows you to search for a city and see the current weather and a 5 day forecast. Github link: https://github.com/sego37/Weather-Dashboard",
      imgUrl: "https://private-user-images.githubusercontent.com/63138641/321851933-9b0b2536-765f-4082-a392-c5ccd17c1051.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjI0NTgxMDUsIm5iZiI6MTcyMjQ1NzgwNSwicGF0aCI6Ii82MzEzODY0MS8zMjE4NTE5MzMtOWIwYjI1MzYtNzY1Zi00MDgyLWEzOTItYzVjY2QxN2MxMDUxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA3MzElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNzMxVDIwMzAwNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWZlNWQ2OTlhZTUxZjQ5MDE1ZTcxOTM1Y2VjMWE2OTcxYjdhOWRkZjM1MmFiZDFmODhiMWQ4NzUzZGZhZmFiMjMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.8KVnpaDKTq0-qN9uwu5V6G2d2a6JmgXyTpXVtYjL78w",
    },
    {
      id: "card-3",
      name: "Task Manager",
      description: "Task Manager: This is a task manager that allows you to add, delete, and mark tasks as completed. Github link: https://github.com/sego37/Task-Manager",
      imgUrl: "https://private-user-images.githubusercontent.com/63138641/320221698-b25aff9d-6e08-46a4-a446-8d55e94bbe90.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjI0NTgxNTAsIm5iZiI6MTcyMjQ1Nzg1MCwicGF0aCI6Ii82MzEzODY0MS8zMjAyMjE2OTgtYjI1YWZmOWQtNmUwOC00NmE0LWE0NDYtOGQ1NWU5NGJiZTkwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA3MzElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNzMxVDIwMzA1MFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTVhZWIwYWE0YTJlZTUyZDAwYWIyNGM4MWJhNjA5NGQ0MjdlYWQyNmRjMzk3YTYwZDZjYWQ4NmY4ZGUxMzYwZmYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.Zfro_QX_kiAvwd4kWBbqhJLWiSwvdj6ISOQ7Nz_j0To",
    },
    {
      id: "card-4",
      name: "Blog Central",
      description: "Blog Central: This is a blog central that allows you to create, edit, and delete blogs. Github link: https://github.com/sego37/Blog-Central",
      imgUrl: "https://private-user-images.githubusercontent.com/63138641/317914700-4472ed51-9c06-413d-8a6e-e7dcba861280.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjI0NTgxNzMsIm5iZiI6MTcyMjQ1Nzg3MywicGF0aCI6Ii82MzEzODY0MS8zMTc5MTQ3MDAtNDQ3MmVkNTEtOWMwNi00MTNkLThhNmUtZTdkY2JhODYxMjgwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA3MzElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNzMxVDIwMzExM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWMzNWVlODcyZDdmNjBjMjNiNzM1NDllNzc5MGE5YzhkY2JmYzM0MzYyMzk1M2ViODBiYjFiYTJjZjk5ZTZhZTMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.93lQqkIUtjudIQNlo-sj7LcZaaGX9AhLCObhKgjcVbI",
    },
    {
      id: "card-5",
      name: "Employee Managment",
      description: "Employee Managment: This is a employee managment that allows you to view, add, edit, and delete employees. Github link: https://github.com/sego37/Employee-Managment",
      imgUrl: "https://private-user-images.githubusercontent.com/63138641/315776943-762b8287-1d90-47f7-ac2d-c3baa794eec3.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjI0NTgyMDUsIm5iZiI6MTcyMjQ1NzkwNSwicGF0aCI6Ii82MzEzODY0MS8zMTU3NzY5NDMtNzYyYjgyODctMWQ5MC00N2Y3LWFjMmQtYzNiYWE3OTRlZWMzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA3MzElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNzMxVDIwMzE0NVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWRmOTlmYzI3NmI4ODM1Yjc2YjFmOTIyNmYzZjE2N2UwNGMwMWIxYmQxMzVkYzgzY2Y2MzRjZjE5YjIyZjgwY2MmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.m0Fe9p9H1hHYYVUUS07p1jh3dYyjmK5Fdw8AW9mEpjA",
    },
    {
      id: "card-6",
      name: "Logo Creator",
      description: "Logo Creator: This is a logo creator that allows you to create a logo by using a series of prompts. GitHub link: https://github.com/sego37/Logo-Creator",      
      imgUrl: "https://private-user-images.githubusercontent.com/63138641/329412805-bdef54d6-813a-4029-bbb0-82279ae80be1.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjI0NTgyNDcsIm5iZiI6MTcyMjQ1Nzk0NywicGF0aCI6Ii82MzEzODY0MS8zMjk0MTI4MDUtYmRlZjU0ZDYtODEzYS00MDI5LWJiYjAtODIyNzlhZTgwYmUxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA3MzElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNzMxVDIwMzIyN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTJjNjU4NmQ1NGNmYTRkZTMwNDA3YzI0NGExYmUxMjE4MzgzNWY3YzQyYmFhZjc1YjYzNjc1ZmNlZmQ0MDY1ODUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.M771TssxAoH1Eeok5T576UjDcN3_Ok_WShzr8n-aH9o",
    },
  ];

  useEffect(() => {
    cards.forEach(card => {
        document.querySelector("#" + card.id).classList.add("hidden")
    })
    document.querySelector("#card-" + currentCard).classList.remove("hidden")
  }, [currentCard])

  function clickNext() {
    if(currentCard < cards.length) {
      setCurrentCard(currentCard + 1)
    } else {
      setCurrentCard(1)
    }
  }

  function clickPrevious() {
    if(currentCard > 1) {
      setCurrentCard(currentCard - 1)
    } else {
      setCurrentCard(cards.length)
    }
  }

  function clickCard(event) {
    setCurrentCard(parseInt(event.target.id.split("-")[1]))
  }

  return (
    <>
      <section>
        <div class="bg-gray-300 sm:grid grid-cols-5 grid-rows-2 px-4 py-6 space-y-6 sm:space-y-0 sm:gap-4">
          <div class="col-span-4 bg-gradient-to-tr from-green-800 to-green-500 rounded-md flex items-center">
            {/* MAIN CONTENT HERE! */}
            <div class="text-white text-center flex flex-col justify-center w-full">
              <div class="max-w-2xl mx-auto mt-20">
                <div
                  id="default-carousel"
                  class="relative "
                  data-carousel="static"
                >
                  <div class="overflow-hidden  mx-6 relative h-56 rounded-lg sm:h-80 xl:h-80 2xl:h-96">
                    {cards.map((card) => {
                      return (
                        <div
                          id={card.id}
                          class="hidden duration-700 ease-in-out"
                          data-carousel-item
                        >
                          <img
                            src={card.imgUrl}
                            class="block absolute w-auto h-auto "
                            alt="..."
                          />
                        </div>
                      );
                    })}
                  </div>
                  <div class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
                    <button
                      type="button"
                      class="w-3 h-3 rounded-full"
                      aria-current="false"
                      aria-label="Slide 1"
                      data-carousel-slide-to="0"
                    ></button>
                    <button
                      type="button"
                      class="w-3 h-3 rounded-full"
                      aria-current="false"
                      aria-label="Slide 2"
                      data-carousel-slide-to="1"
                    ></button>
                    <button
                      type="button"
                      class="w-3 h-3 rounded-full"
                      aria-current="false"
                      aria-label="Slide 3"
                      data-carousel-slide-to="2"
                    ></button>
                  </div>
                  <button
                    type="button"
                    onClick={clickPrevious}
                    class="flex absolute top-0 left-0 z-30 justify-center items-center h-full cursor-pointer group focus:outline-none"
                    data-carousel-prev
                  >
                    <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                      <svg
                        class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 19l-7-7 7-7"
                        ></path>
                      </svg>
                      <span class="hidden">Previous</span>
                    </span>
                  </button>
                  <button
                  onClick={clickNext}
                    type="button"
                    class="flex absolute top-0 right-0 z-30 justify-center items-center  h-full cursor-pointer group focus:outline-none"
                    data-carousel-next
                  >
                    <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                      <svg
                        class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                      <span class="hidden">Next</span>
                    </span>
                  </button>
                </div>

                <p class="m-3">
                  {cards[currentCard-1].description}
                  <span className="invisible">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique distinctio voluptatum quaerat, tempore voluptatibus perspiciatis iure neque ratione dignissimos ea ab tempora vitae natus obcaecati, ipsam saepe itaque. Itaque, eum?</span>
                  </p>
              </div>
            </div>
          </div>
          
          <div class="h-96 col-span-1 ">
            <div class="bg-white  rounded-md">
              <h1 class="text-center text-xl my-4  bg-white py-2 rounded-md border-b-2 cursor-pointer  text-gray-600">
                My Projects
              </h1>
              <div class="bg-white rounded-md list-none  text-center ">
                {
                  cards.map(card => {
                    return (
                      <li 
                      class={`py-3 border-b-2 hover:bg-green-100 ${currentCard == card.id.split("-")[1] ? "bg-green-100" : null}`} 
                      key={card.id}
                      id={card.id}
                      onClick={clickCard}
                      >
                        <a href="#" class="list-none hover:text-indigo-600 ">
                          {card.name}
                        </a>
                      </li>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;

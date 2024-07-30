import { useEffect, useState } from "react";

function Portfolio() {

    const [currentCard, setCurrentCard] = useState(1)

  const cards = [
    {
      id: "card-1",
      name: "Card 1",
      description: "Lorem asd asd asda sda asd asdasdasdasdasd asdas dasdas dasd asdas as 1",
      imgUrl: "https://placehold.co/600x400",
    },
    {
      id: "card-2",
      name: "Card 2",
      description: "Lorem 2",
      imgUrl: "https://placehold.co/300x500",
    },
    {
      id: "card-3",
      name: "Card 3",
      description: "Lorem 3",
      imgUrl: "https://placehold.co/500x300",
    },
    {
      id: "card-4",
      name: "Card 4",
      description: "Lorem 4",
      imgUrl: "https://placehold.co/600x400",
    },
    {
      id: "card-5",
      name: "Card 5",
      description: "Lorem 5",
      imgUrl: "https://placehold.co/300x500",
    },
    {
      id: "card-6",
      name: "Card 6",
      description: "Lorem 6",
      imgUrl: "https://placehold.co/500x300",
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
        <div class="bg-gray-100 sm:grid grid-cols-5 grid-rows-2 px-4 py-6  space-y-6 sm:space-y-0 sm:gap-4">
          <div class="h-96 col-span-4 bg-gradient-to-tr from-indigo-800 to-indigo-500 rounded-md flex items-center">
            {/* MAIN CONTENT HERE! */}
            <div class="text-white text-center flex flex-col justify-center w-full">
              <div class="max-w-2xl mx-auto">
                <div
                  id="default-carousel"
                  class="relative"
                  data-carousel="static"
                >
                  <div class="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
                    {cards.map((card) => {
                      return (
                        <div
                          id={card.id}
                          class="hidden duration-700 ease-in-out"
                          data-carousel-item
                        >
                          <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">
                            {card.name}
                          </span>
                          <img
                            src={card.imgUrl}
                            class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
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
                    class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
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
                    class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
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

                <p class="mt-5">
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
                      class={`py-3 border-b-2 hover:bg-indigo-100 ${currentCard == card.id.split("-")[1] ? "bg-indigo-100" : null}`} 
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

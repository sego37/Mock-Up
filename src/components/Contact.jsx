function Contact() {

    function onFirstNameBlur(event) {
        if (event.target.value === "") {
            document.getElementById("fname-caption").classList.remove("hidden");
        } else {
            document.getElementById("fname-caption").classList.add("hidden");
        }
    }


  return (
    <>
      <div class="flex items-center justify-center p-12">
        <div class="mx-auto w-full max-w-[550px]">
          <form action="https://formbold.com/s/FORM_ID" method="POST">
            <div class="-mx-3 flex flex-wrap">
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label
                    for="fName"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="fName"
                    id="fName"
                    placeholder="First Name"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    onBlur={onFirstNameBlur}
                  />
                  <caption
                    id="fname-caption"
                    className="hidden block w-full text-red-600 text-xs"
                  >
                    First name is required
                  </caption>
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label
                    for="lName"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lName"
                    id="lName"
                    placeholder="Last Name"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                  <caption
                    id="lname-caption"
                    className="hidden block w-full text-red-600 text-xs"
                  >
                    Last name is required
                  </caption>
                </div>
              </div>
            </div>

            <div class="mb-5">
              <label
                for="guest"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="youremail@mail.com"
                min="0"
                class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
              <caption
                id="email-caption"
                className="hidden block w-full text-red-600 text-xs"
              >
                Email is required
              </caption>
            </div>

            <div class="-mx-3 flex flex-wrap">
              <div class="w-full px-3">
                <div class="mb-5">
                  <label
                    for="message"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Message
                  </label>
                  <textarea
                    type="message"
                    name="message"
                    id="message"
                    width="100%"
                    rows={5}
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                  <caption
                    id="message-caption"
                    className="hidden block w-full text-red-600 text-xs"
                  >
                    Message is required
                  </caption>
                </div>
              </div>
            </div>

            <div>
              <button class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;

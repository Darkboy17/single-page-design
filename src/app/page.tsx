"use client";
import { useState } from "react";
import "./styles.css";

export default function Home() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="div">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cdc7e0ecbc6768fd8a1126c642a6afc4b571cb318fbf78274256a3839f43bd72?apiKey=52143d22d68d4caea70948bab45422fb&"
        className="drop-down"
      />
      <span className="span">
        <div className="flex items-stretch justify-between gap-5 max-md:flex-wrap">
          <div className="black-box bg-neutral-900 flex w-[75px] shrink-0 h-[75px] flex-col absolute left-10 p-4"></div>
          <span className="navbgdrop shadow-sm flex items-start justify-end gap-12 p-2.5 rounded-[50px] max-md:max-w-full max-md:flex-wrap max-md:pr-5">
            <span className="text-gray-700 text-xl font-semibold tracking-wide whitespace-nowrap shadow-sm bg-white self-stretch grow justify-center items-stretch px-7 py-5 rounded-[50px] max-md:px-5">
              Home
            </span>
            <div className="text-gray-700 text-xl font-bold tracking-wide self-center my-auto">
              About Us
            </div>
            <div className="text-gray-700 text-xl font-bold tracking-wide self-center my-auto">
              Work
            </div>
            <div className="text-gray-700 text-xl font-bold tracking-wide self-center my-auto">
              Services
            </div>
            <div className="text-gray-700 text-xl font-bold tracking-wide self-center my-auto">
              Clients
            </div>
            <div className="text-gray-700 text-xl font-bold tracking-wide self-center my-auto">
              Team
            </div>
            <div className="text-gray-700 text-xl font-bold tracking-wide self-center grow whitespace-nowrap my-auto">
              Reach Us
            </div>
          </span>
        </div>

        <div className="div-14">
          <div className="div-15">
            <div className="column">
              <span className="span-6">
                <div className="div-16">
                  Diversifying the Designs of Digital World
                </div>
                <div className="div-17">
                  Explorogent International Services Private Limited (EISPL) is
                  one of the most famous companies in the sector of Web and
                  Mobile Development. In the market, EISPL has a strong presence
                  in providing quality services to its clients.
                  <br />
                  <br />
                  EISPL is convinced that one should diversify the offering,
                  given the changing needs of the clients. That is why we engage
                  in multiple projects and activities. We also possess knowledge
                  in web development, app development, UI/UX design, as well as
                  digital marketing.
                </div>
                <div className="div-18"></div>
                <span className="span-7">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2da69108-2b41-4a24-b8e3-f865a2353da8?apiKey=52143d22d68d4caea70948bab45422fb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2da69108-2b41-4a24-b8e3-f865a2353da8?apiKey=52143d22d68d4caea70948bab45422fb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2da69108-2b41-4a24-b8e3-f865a2353da8?apiKey=52143d22d68d4caea70948bab45422fb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2da69108-2b41-4a24-b8e3-f865a2353da8?apiKey=52143d22d68d4caea70948bab45422fb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2da69108-2b41-4a24-b8e3-f865a2353da8?apiKey=52143d22d68d4caea70948bab45422fb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2da69108-2b41-4a24-b8e3-f865a2353da8?apiKey=52143d22d68d4caea70948bab45422fb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2da69108-2b41-4a24-b8e3-f865a2353da8?apiKey=52143d22d68d4caea70948bab45422fb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2da69108-2b41-4a24-b8e3-f865a2353da8?apiKey=52143d22d68d4caea70948bab45422fb&"
                    className="img"
                  />
                  <div className="div-19">Book a Call</div>
                </span>
              </span>
            </div>
            <div className="column-2">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/39123c63d530c5ed46b33c176a382d51074ccf19c9061ddcc9108ed9b3615e61?apiKey=52143d22d68d4caea70948bab45422fb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/39123c63d530c5ed46b33c176a382d51074ccf19c9061ddcc9108ed9b3615e61?apiKey=52143d22d68d4caea70948bab45422fb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/39123c63d530c5ed46b33c176a382d51074ccf19c9061ddcc9108ed9b3615e61?apiKey=52143d22d68d4caea70948bab45422fb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/39123c63d530c5ed46b33c176a382d51074ccf19c9061ddcc9108ed9b3615e61?apiKey=52143d22d68d4caea70948bab45422fb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/39123c63d530c5ed46b33c176a382d51074ccf19c9061ddcc9108ed9b3615e61?apiKey=52143d22d68d4caea70948bab45422fb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/39123c63d530c5ed46b33c176a382d51074ccf19c9061ddcc9108ed9b3615e61?apiKey=52143d22d68d4caea70948bab45422fb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/39123c63d530c5ed46b33c176a382d51074ccf19c9061ddcc9108ed9b3615e61?apiKey=52143d22d68d4caea70948bab45422fb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/39123c63d530c5ed46b33c176a382d51074ccf19c9061ddcc9108ed9b3615e61?apiKey=52143d22d68d4caea70948bab45422fb&"
                className="img-2"
              />
            </div>
          </div>
        </div>
        <div className="div-20">
          In the realm of digital solutions, we offer expertise in
        </div>
      </span>
      <span className="span-8">
        <div className="div-21">
          <span className="span-9">Website Development</span>
          <span className="span-10">App Development</span>
          <span className="span-11">UI/UX Design</span>
          <span className="span-12">Digital Marketing</span>
          <span className="span-13">SEO Optimization</span>
        </div>
        <div className="div-22"></div>
        <span className="span-14">
          <div className="div-23"></div>
          <div className="div-24">
            showcasing our proficiency across various facets of the digital
            platform
          </div>
        </span>
        <div className="div-25"></div>
        <div className="div-26">
          Stay Ahead!
          <br />
          Launch Your Next Project with Stackkaroo
        </div>
      </span>
      <span className="span-15">
        <div className="div-27">
          <div className="div-28">
            <div className="column-3">
              <span className="span-16">
                <div className="div-29"></div>
                <div className="div-30">Our Story</div>
                <div className="div-31">
                  <div className="div-32"></div>
                  <span className="span-17">
                    <div className="div-33">
                      Guiding EISPL as Directors, Mr. Sourav Gupta and Mr.
                      Chandan Mishra bring their extensive experience to the
                      forefront as industry veterans. Our team is fueled by
                      innovation, continually striving to exceed customer
                      expectations.
                      <br />
                      <br />
                      Operating from our registered office in Agartala Sadar,
                      Tripura (W), our company is officially registered with the
                      Corporate Identification Number (CIN). Our active status
                      and an authorized share capital of Rs 10.00 lac are a
                      source of pride.
                    </div>
                    <span className="span-18">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b79783259bc90dd28ea90bdd762014110a88c715f313aa5d9c00f52cc096725?apiKey=52143d22d68d4caea70948bab45422fb&"
                        className="img-3"
                      />
                      <div className="div-34">Get Estimated Project Cost</div>
                    </span>
                    <div className="div-35"></div>
                  </span>
                </div>
              </span>
            </div>
            <div className="column-4">
              <div className="div-36">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a69d541e4f7e33aa6207f39b62e244fde8bf1df5f2dac04b58c19d4d315c87b6?apiKey=52143d22d68d4caea70948bab45422fb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a69d541e4f7e33aa6207f39b62e244fde8bf1df5f2dac04b58c19d4d315c87b6?apiKey=52143d22d68d4caea70948bab45422fb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a69d541e4f7e33aa6207f39b62e244fde8bf1df5f2dac04b58c19d4d315c87b6?apiKey=52143d22d68d4caea70948bab45422fb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a69d541e4f7e33aa6207f39b62e244fde8bf1df5f2dac04b58c19d4d315c87b6?apiKey=52143d22d68d4caea70948bab45422fb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a69d541e4f7e33aa6207f39b62e244fde8bf1df5f2dac04b58c19d4d315c87b6?apiKey=52143d22d68d4caea70948bab45422fb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a69d541e4f7e33aa6207f39b62e244fde8bf1df5f2dac04b58c19d4d315c87b6?apiKey=52143d22d68d4caea70948bab45422fb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a69d541e4f7e33aa6207f39b62e244fde8bf1df5f2dac04b58c19d4d315c87b6?apiKey=52143d22d68d4caea70948bab45422fb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a69d541e4f7e33aa6207f39b62e244fde8bf1df5f2dac04b58c19d4d315c87b6?apiKey=52143d22d68d4caea70948bab45422fb&"
                  className="img-4"
                />
                <div className="div-37"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-38">
          <div className="div-39"></div>
          <span className="span-19">
            <div className="div-40"></div>
            <div className="div-41">Why Choose Us?</div>
            <span className="span-20">
              <span className="span-21">
                <div className="div-42">
                  We excel with reliability, innovation and customer-centric
                  approach for our quality products.
                  <br />
                  Our dedicated team ensures that the solutions provided are
                  dependable and long-term
                </div>
                <div className="div-43"></div>
              </span>
              <div className="div-44">
                <div className="div-45">
                  <div className="column-5">
                    <span className="span-22">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/45111810-0fdb-4227-b315-4d5664a3d345?apiKey=52143d22d68d4caea70948bab45422fb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/45111810-0fdb-4227-b315-4d5664a3d345?apiKey=52143d22d68d4caea70948bab45422fb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/45111810-0fdb-4227-b315-4d5664a3d345?apiKey=52143d22d68d4caea70948bab45422fb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/45111810-0fdb-4227-b315-4d5664a3d345?apiKey=52143d22d68d4caea70948bab45422fb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/45111810-0fdb-4227-b315-4d5664a3d345?apiKey=52143d22d68d4caea70948bab45422fb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/45111810-0fdb-4227-b315-4d5664a3d345?apiKey=52143d22d68d4caea70948bab45422fb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/45111810-0fdb-4227-b315-4d5664a3d345?apiKey=52143d22d68d4caea70948bab45422fb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/45111810-0fdb-4227-b315-4d5664a3d345?apiKey=52143d22d68d4caea70948bab45422fb&"
                        className="img-5"
                      />
                      <div className="div-46">User-Centric Approach</div>
                    </span>
                  </div>
                  <div className="column-6">
                    <span className="span-23">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dd4f06fb-0667-43db-b95f-d1d05071adf4?apiKey=52143d22d68d4caea70948bab45422fb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd4f06fb-0667-43db-b95f-d1d05071adf4?apiKey=52143d22d68d4caea70948bab45422fb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd4f06fb-0667-43db-b95f-d1d05071adf4?apiKey=52143d22d68d4caea70948bab45422fb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd4f06fb-0667-43db-b95f-d1d05071adf4?apiKey=52143d22d68d4caea70948bab45422fb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd4f06fb-0667-43db-b95f-d1d05071adf4?apiKey=52143d22d68d4caea70948bab45422fb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd4f06fb-0667-43db-b95f-d1d05071adf4?apiKey=52143d22d68d4caea70948bab45422fb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd4f06fb-0667-43db-b95f-d1d05071adf4?apiKey=52143d22d68d4caea70948bab45422fb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd4f06fb-0667-43db-b95f-d1d05071adf4?apiKey=52143d22d68d4caea70948bab45422fb&"
                        className="img-6"
                      />
                      <div className="div-47">Customer Satisfaction</div>
                    </span>
                  </div>
                  <div className="column-7">
                    <span className="span-24">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5af872f6-d95c-4f38-b1fc-bd7cf3062e9c?apiKey=52143d22d68d4caea70948bab45422fb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5af872f6-d95c-4f38-b1fc-bd7cf3062e9c?apiKey=52143d22d68d4caea70948bab45422fb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5af872f6-d95c-4f38-b1fc-bd7cf3062e9c?apiKey=52143d22d68d4caea70948bab45422fb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5af872f6-d95c-4f38-b1fc-bd7cf3062e9c?apiKey=52143d22d68d4caea70948bab45422fb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5af872f6-d95c-4f38-b1fc-bd7cf3062e9c?apiKey=52143d22d68d4caea70948bab45422fb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5af872f6-d95c-4f38-b1fc-bd7cf3062e9c?apiKey=52143d22d68d4caea70948bab45422fb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5af872f6-d95c-4f38-b1fc-bd7cf3062e9c?apiKey=52143d22d68d4caea70948bab45422fb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5af872f6-d95c-4f38-b1fc-bd7cf3062e9c?apiKey=52143d22d68d4caea70948bab45422fb&"
                        className="img-7"
                      />
                      <div className="div-48">Integrating Feedback</div>
                    </span>
                  </div>
                </div>
              </div>
              <div className="div-49">
                <div className="div-50">
                  <div className="column-8">
                    <span className="span-25">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6945f17f-95b5-4f90-a4cb-a6de67711205?apiKey=52143d22d68d4caea70948bab45422fb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6945f17f-95b5-4f90-a4cb-a6de67711205?apiKey=52143d22d68d4caea70948bab45422fb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6945f17f-95b5-4f90-a4cb-a6de67711205?apiKey=52143d22d68d4caea70948bab45422fb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6945f17f-95b5-4f90-a4cb-a6de67711205?apiKey=52143d22d68d4caea70948bab45422fb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6945f17f-95b5-4f90-a4cb-a6de67711205?apiKey=52143d22d68d4caea70948bab45422fb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6945f17f-95b5-4f90-a4cb-a6de67711205?apiKey=52143d22d68d4caea70948bab45422fb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6945f17f-95b5-4f90-a4cb-a6de67711205?apiKey=52143d22d68d4caea70948bab45422fb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6945f17f-95b5-4f90-a4cb-a6de67711205?apiKey=52143d22d68d4caea70948bab45422fb&"
                        className="img-8"
                      />
                      <div className="div-51">High Quality Products</div>
                    </span>
                  </div>
                  <div className="column-9">
                    <span className="span-26">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4ca6752c-b051-4c98-b2fd-6820452087a2?apiKey=52143d22d68d4caea70948bab45422fb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ca6752c-b051-4c98-b2fd-6820452087a2?apiKey=52143d22d68d4caea70948bab45422fb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ca6752c-b051-4c98-b2fd-6820452087a2?apiKey=52143d22d68d4caea70948bab45422fb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ca6752c-b051-4c98-b2fd-6820452087a2?apiKey=52143d22d68d4caea70948bab45422fb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ca6752c-b051-4c98-b2fd-6820452087a2?apiKey=52143d22d68d4caea70948bab45422fb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ca6752c-b051-4c98-b2fd-6820452087a2?apiKey=52143d22d68d4caea70948bab45422fb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ca6752c-b051-4c98-b2fd-6820452087a2?apiKey=52143d22d68d4caea70948bab45422fb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ca6752c-b051-4c98-b2fd-6820452087a2?apiKey=52143d22d68d4caea70948bab45422fb&"
                        className="img-9"
                      />
                      <div className="div-52">On-Time Product Delivery</div>
                    </span>
                  </div>
                </div>
              </div>
              <div className="div-53"></div>
              <span className="span-27">
                <div className="div-54"></div>
                <div className="div-55">Stackkaroo’s Digital Services</div>
              </span>
              <div className="div-56">
                We excel with reliability, innovation and customer-centric
                approach for our quality products.
                <br />
                Our dedicated team ensures that the solutions provided are
                dependable and long-term
              </div>
            </span>
          </span>
        </div>
        <div className="div-57">
          <div className="div-58">
            <span className="span-28">
              <div className="div-59"></div>
              <span className="span-29">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/04afba2533daaf29d300e559c486b8e425142d0f3fa5fae6c2e4a9d4f55d1d36?apiKey=52143d22d68d4caea70948bab45422fb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/04afba2533daaf29d300e559c486b8e425142d0f3fa5fae6c2e4a9d4f55d1d36?apiKey=52143d22d68d4caea70948bab45422fb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/04afba2533daaf29d300e559c486b8e425142d0f3fa5fae6c2e4a9d4f55d1d36?apiKey=52143d22d68d4caea70948bab45422fb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/04afba2533daaf29d300e559c486b8e425142d0f3fa5fae6c2e4a9d4f55d1d36?apiKey=52143d22d68d4caea70948bab45422fb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/04afba2533daaf29d300e559c486b8e425142d0f3fa5fae6c2e4a9d4f55d1d36?apiKey=52143d22d68d4caea70948bab45422fb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/04afba2533daaf29d300e559c486b8e425142d0f3fa5fae6c2e4a9d4f55d1d36?apiKey=52143d22d68d4caea70948bab45422fb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/04afba2533daaf29d300e559c486b8e425142d0f3fa5fae6c2e4a9d4f55d1d36?apiKey=52143d22d68d4caea70948bab45422fb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/04afba2533daaf29d300e559c486b8e425142d0f3fa5fae6c2e4a9d4f55d1d36?apiKey=52143d22d68d4caea70948bab45422fb&"
                  className="img-10"
                />
                <div className="div-60">Website Development</div>
              </span>
              <div className="div-61">
                We specialize in responsive website development, ensuring
                optimal performance across various devices.
              </div>
              <span className="span-30">
                <div className="div-62">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/59ec94b837080ce37d2d7a62f0b610b0160b9edd2899b4928090a21605b9a57a?apiKey=52143d22d68d4caea70948bab45422fb&"
                    className="img-11"
                  />
                  <div className="div-63">
                    <div className="div-64"></div>
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4c8f44c7bbdbf776d1d8ba6843eccb53660af889e499726b1b355c8dbd638635?apiKey=52143d22d68d4caea70948bab45422fb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c8f44c7bbdbf776d1d8ba6843eccb53660af889e499726b1b355c8dbd638635?apiKey=52143d22d68d4caea70948bab45422fb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c8f44c7bbdbf776d1d8ba6843eccb53660af889e499726b1b355c8dbd638635?apiKey=52143d22d68d4caea70948bab45422fb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c8f44c7bbdbf776d1d8ba6843eccb53660af889e499726b1b355c8dbd638635?apiKey=52143d22d68d4caea70948bab45422fb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c8f44c7bbdbf776d1d8ba6843eccb53660af889e499726b1b355c8dbd638635?apiKey=52143d22d68d4caea70948bab45422fb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c8f44c7bbdbf776d1d8ba6843eccb53660af889e499726b1b355c8dbd638635?apiKey=52143d22d68d4caea70948bab45422fb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c8f44c7bbdbf776d1d8ba6843eccb53660af889e499726b1b355c8dbd638635?apiKey=52143d22d68d4caea70948bab45422fb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c8f44c7bbdbf776d1d8ba6843eccb53660af889e499726b1b355c8dbd638635?apiKey=52143d22d68d4caea70948bab45422fb&"
                      className="img-12"
                    />
                  </div>
                </div>
                <div className="div-65">
                  UI/UX
                  <br />
                  Design
                </div>
              </span>
            </span>
            <div className="div-66">
              <div className="div-67"></div>
              <div className="div-68">
                <span className="span-31">
                  <div className="div-69">
                    We specialize in creating exemplary designs prioritizing
                    user-friendly concepts and aesthetically appealing
                    interfaces.
                  </div>
                  <div className="div-70"></div>
                </span>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/59ec94b837080ce37d2d7a62f0b610b0160b9edd2899b4928090a21605b9a57a?apiKey=52143d22d68d4caea70948bab45422fb&"
                  className="img-13"
                />
              </div>
            </div>
          </div>
          <div className="div-71"></div>
          <div className="div-72">
            <div className="div-73">
              <div className="div-74">
                <div className="column-10">
                  <span className="span-32">
                    <span className="span-33">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b09b2659ee6a863b9a00e7bcb0bfb7bbc36efef7efa4c3b1ceaef28b99fa7da7?apiKey=52143d22d68d4caea70948bab45422fb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b09b2659ee6a863b9a00e7bcb0bfb7bbc36efef7efa4c3b1ceaef28b99fa7da7?apiKey=52143d22d68d4caea70948bab45422fb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b09b2659ee6a863b9a00e7bcb0bfb7bbc36efef7efa4c3b1ceaef28b99fa7da7?apiKey=52143d22d68d4caea70948bab45422fb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b09b2659ee6a863b9a00e7bcb0bfb7bbc36efef7efa4c3b1ceaef28b99fa7da7?apiKey=52143d22d68d4caea70948bab45422fb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b09b2659ee6a863b9a00e7bcb0bfb7bbc36efef7efa4c3b1ceaef28b99fa7da7?apiKey=52143d22d68d4caea70948bab45422fb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b09b2659ee6a863b9a00e7bcb0bfb7bbc36efef7efa4c3b1ceaef28b99fa7da7?apiKey=52143d22d68d4caea70948bab45422fb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b09b2659ee6a863b9a00e7bcb0bfb7bbc36efef7efa4c3b1ceaef28b99fa7da7?apiKey=52143d22d68d4caea70948bab45422fb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b09b2659ee6a863b9a00e7bcb0bfb7bbc36efef7efa4c3b1ceaef28b99fa7da7?apiKey=52143d22d68d4caea70948bab45422fb&"
                        className="img-14"
                      />
                      <div className="div-75">App Development</div>
                    </span>
                    <div className="div-76">
                      We specialize in creating superior apps for diverse
                      sectors such as e-commerce, education, and transportation.
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/896837ba359ddbbedd37dfbcd80427c2c55e024f9460ab7f666496714cbff1fd?apiKey=52143d22d68d4caea70948bab45422fb&"
                      className="img-15"
                    />
                  </span>
                </div>
                <div className="column-11">
                  <span className="span-34">
                    <div className="div-77">
                      <span className="span-35">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/732566a86e05b6c89371f5602e840c2eb74186531ac3174d07b680d8bbf3d7c0?apiKey=52143d22d68d4caea70948bab45422fb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/732566a86e05b6c89371f5602e840c2eb74186531ac3174d07b680d8bbf3d7c0?apiKey=52143d22d68d4caea70948bab45422fb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/732566a86e05b6c89371f5602e840c2eb74186531ac3174d07b680d8bbf3d7c0?apiKey=52143d22d68d4caea70948bab45422fb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/732566a86e05b6c89371f5602e840c2eb74186531ac3174d07b680d8bbf3d7c0?apiKey=52143d22d68d4caea70948bab45422fb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/732566a86e05b6c89371f5602e840c2eb74186531ac3174d07b680d8bbf3d7c0?apiKey=52143d22d68d4caea70948bab45422fb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/732566a86e05b6c89371f5602e840c2eb74186531ac3174d07b680d8bbf3d7c0?apiKey=52143d22d68d4caea70948bab45422fb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/732566a86e05b6c89371f5602e840c2eb74186531ac3174d07b680d8bbf3d7c0?apiKey=52143d22d68d4caea70948bab45422fb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/732566a86e05b6c89371f5602e840c2eb74186531ac3174d07b680d8bbf3d7c0?apiKey=52143d22d68d4caea70948bab45422fb&"
                          className="img-16"
                        />
                        <div className="div-78">Software Development</div>
                      </span>
                      <div className="div-79"></div>
                    </div>
                    <div className="div-80">
                      We specialize in tailored solutions ensuring business
                      growth and efficiency by providing superior software.
                    </div>
                    <div className="div-81"></div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/896837ba359ddbbedd37dfbcd80427c2c55e024f9460ab7f666496714cbff1fd?apiKey=52143d22d68d4caea70948bab45422fb&"
                      className="img-17"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="div-82"></div>
            <div className="div-83">
              <div className="div-84">
                <div className="column-12">
                  <span className="span-36">
                    <span className="span-37">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4c8f44c7bbdbf776d1d8ba6843eccb53660af889e499726b1b355c8dbd638635?apiKey=52143d22d68d4caea70948bab45422fb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c8f44c7bbdbf776d1d8ba6843eccb53660af889e499726b1b355c8dbd638635?apiKey=52143d22d68d4caea70948bab45422fb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c8f44c7bbdbf776d1d8ba6843eccb53660af889e499726b1b355c8dbd638635?apiKey=52143d22d68d4caea70948bab45422fb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c8f44c7bbdbf776d1d8ba6843eccb53660af889e499726b1b355c8dbd638635?apiKey=52143d22d68d4caea70948bab45422fb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c8f44c7bbdbf776d1d8ba6843eccb53660af889e499726b1b355c8dbd638635?apiKey=52143d22d68d4caea70948bab45422fb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c8f44c7bbdbf776d1d8ba6843eccb53660af889e499726b1b355c8dbd638635?apiKey=52143d22d68d4caea70948bab45422fb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c8f44c7bbdbf776d1d8ba6843eccb53660af889e499726b1b355c8dbd638635?apiKey=52143d22d68d4caea70948bab45422fb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c8f44c7bbdbf776d1d8ba6843eccb53660af889e499726b1b355c8dbd638635?apiKey=52143d22d68d4caea70948bab45422fb&"
                        className="img-18"
                      />
                      <div className="div-85">Digital Marketing</div>
                    </span>
                    <div className="div-86">
                      We specialize in tailored digital marketing solutions and
                      ensure effective online marketing strategies.
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/896837ba359ddbbedd37dfbcd80427c2c55e024f9460ab7f666496714cbff1fd?apiKey=52143d22d68d4caea70948bab45422fb&"
                      className="img-19"
                    />
                  </span>
                </div>
                <div className="column-13">
                  <span className="span-38">
                    <span className="span-39">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b2fa3458c74a94879d256d7d3739a8a5da5e95233c2263e5ea151fd7119f16e5?apiKey=52143d22d68d4caea70948bab45422fb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2fa3458c74a94879d256d7d3739a8a5da5e95233c2263e5ea151fd7119f16e5?apiKey=52143d22d68d4caea70948bab45422fb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2fa3458c74a94879d256d7d3739a8a5da5e95233c2263e5ea151fd7119f16e5?apiKey=52143d22d68d4caea70948bab45422fb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2fa3458c74a94879d256d7d3739a8a5da5e95233c2263e5ea151fd7119f16e5?apiKey=52143d22d68d4caea70948bab45422fb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2fa3458c74a94879d256d7d3739a8a5da5e95233c2263e5ea151fd7119f16e5?apiKey=52143d22d68d4caea70948bab45422fb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2fa3458c74a94879d256d7d3739a8a5da5e95233c2263e5ea151fd7119f16e5?apiKey=52143d22d68d4caea70948bab45422fb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2fa3458c74a94879d256d7d3739a8a5da5e95233c2263e5ea151fd7119f16e5?apiKey=52143d22d68d4caea70948bab45422fb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2fa3458c74a94879d256d7d3739a8a5da5e95233c2263e5ea151fd7119f16e5?apiKey=52143d22d68d4caea70948bab45422fb&"
                        className="img-20"
                      />
                      <div className="div-87">SEO Optimization</div>
                    </span>
                    <div className="div-88">
                      We ensure optimal website traffic by addressing factors
                      such as user experience, accessibility, product details,
                      and monitoring target audience.
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/896837ba359ddbbedd37dfbcd80427c2c55e024f9460ab7f666496714cbff1fd?apiKey=52143d22d68d4caea70948bab45422fb&"
                      className="img-21"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-89">SEO Services</div>
        <div className="div-90">
          <span className="span-40">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0621a62598e58121c67da8ac9c6f2fde7035eaf2ecc71f3f96318b5418709693?apiKey=52143d22d68d4caea70948bab45422fb&"
              className="img-22"
            />
            <div className="div-91">Customized SEO Services</div>
          </span>
          <span className="span-41">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0621a62598e58121c67da8ac9c6f2fde7035eaf2ecc71f3f96318b5418709693?apiKey=52143d22d68d4caea70948bab45422fb&"
              className="img-23"
            />
            <div className="div-92">Mobile SEO Services</div>
          </span>
          <div className="div-93"></div>
        </div>
        <div className="div-94">
          <div className="div-95">
            <div className="column-14">
              <div className="div-96">
                <span className="span-42">
                  <div className="div-97">
                    We develop tailored SEO plans for new websites as they
                    consider a correct SEO website checklist, as well as
                    strategy, to be critical for business.
                  </div>
                  <div className="div-98"></div>
                  <span className="span-43">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0621a62598e58121c67da8ac9c6f2fde7035eaf2ecc71f3f96318b5418709693?apiKey=52143d22d68d4caea70948bab45422fb&"
                      className="img-24"
                    />
                    <div className="div-99">On-Page SEO Services</div>
                  </span>
                  <div className="div-100">
                    We offer on-page SEO services for content, photos,
                    descriptions, and visibility. They follow the design
                    principles for SEO-friendly websites in order to provide
                    their customers with the best outcomes.
                  </div>
                </span>
                <span className="span-44">
                  <div className="div-101"></div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0621a62598e58121c67da8ac9c6f2fde7035eaf2ecc71f3f96318b5418709693?apiKey=52143d22d68d4caea70948bab45422fb&"
                    className="img-25"
                  />
                  <div className="div-102">Off-Page SEO Services</div>
                </span>
              </div>
            </div>
            <div className="column-15">
              <span className="span-45">
                <div className="div-103">
                  We stress upon the mobile optimizations since the mobile phone
                  use by search is highly prevalent. They are more able to score
                  the best SEO rankings and can easily be viewed on mobile
                  devices.
                </div>
                <div className="div-104">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0621a62598e58121c67da8ac9c6f2fde7035eaf2ecc71f3f96318b5418709693?apiKey=52143d22d68d4caea70948bab45422fb&"
                    className="img-26"
                  />
                  <span className="span-46">
                    <div className="div-105"></div>
                    <div className="div-106">
                      Free Website Audit and Strategies
                    </div>
                  </span>
                </div>
                <span className="span-47">
                  <div className="div-107">
                    We go beyond essential SEO website development to give out
                    free website audits, analysis and SEO strategies for
                    transparent business strategies. They target business owners
                    in different industries, and these packages include local
                    SEO and e-commerce services.
                  </div>
                  <div className="div-108"></div>
                </span>
              </span>
            </div>
          </div>
        </div>
        <span className="span-48">
          <div className="div-109">
            We undertake off-page SEO for better rankings. They mainly
            specialize in handling backlink profiles. Their SEO analysts strive
            to ensure that their websites are listed on some of the popular
            sites in the industry of travel.
          </div>
          <div className="div-110"></div>
        </span>
        <div className="div-111"></div>
        <div className="div-112">
          Stackkaroo’s Talent Hiring & Job Placement Services
        </div>
        <div className="div-113"></div>
      </span>
      <span className="span-49">
        <div className="div-114">
          We are a talent searching platform that redesigns how companies hire
          talents. It is a cost-effective solution for industries. We also
          provide global job opportunities with good salaries, support, and
          professional development.
        </div>
        <div className="div-115"></div>
        <div className="div-116">
          <div className="div-117">
            <div className="column-16">
              <div className="div-118">
                <span className="span-50">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5e0b0219202c17fc8d13c012f8c84464b8c6c2047f5bc52abc00601d166d405f?apiKey=52143d22d68d4caea70948bab45422fb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e0b0219202c17fc8d13c012f8c84464b8c6c2047f5bc52abc00601d166d405f?apiKey=52143d22d68d4caea70948bab45422fb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e0b0219202c17fc8d13c012f8c84464b8c6c2047f5bc52abc00601d166d405f?apiKey=52143d22d68d4caea70948bab45422fb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e0b0219202c17fc8d13c012f8c84464b8c6c2047f5bc52abc00601d166d405f?apiKey=52143d22d68d4caea70948bab45422fb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e0b0219202c17fc8d13c012f8c84464b8c6c2047f5bc52abc00601d166d405f?apiKey=52143d22d68d4caea70948bab45422fb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e0b0219202c17fc8d13c012f8c84464b8c6c2047f5bc52abc00601d166d405f?apiKey=52143d22d68d4caea70948bab45422fb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e0b0219202c17fc8d13c012f8c84464b8c6c2047f5bc52abc00601d166d405f?apiKey=52143d22d68d4caea70948bab45422fb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e0b0219202c17fc8d13c012f8c84464b8c6c2047f5bc52abc00601d166d405f?apiKey=52143d22d68d4caea70948bab45422fb&"
                    className="img-27"
                  />
                  <div className="div-119">Unleashing Top Talent Globally</div>
                  <div className="div-120">
                    We offer 5% top talents and supports companies hiring from
                    various time zones.
                  </div>
                </span>
                <div className="div-121"></div>
              </div>
            </div>
            <div className="column-17">
              <div className="div-122">
                <div className="div-123"></div>
                <span className="span-51">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b872d57346ebf4ae26ac985a9350eda4c4daa62bdacbd51c4ec992ebd2f0aa03?apiKey=52143d22d68d4caea70948bab45422fb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b872d57346ebf4ae26ac985a9350eda4c4daa62bdacbd51c4ec992ebd2f0aa03?apiKey=52143d22d68d4caea70948bab45422fb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b872d57346ebf4ae26ac985a9350eda4c4daa62bdacbd51c4ec992ebd2f0aa03?apiKey=52143d22d68d4caea70948bab45422fb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b872d57346ebf4ae26ac985a9350eda4c4daa62bdacbd51c4ec992ebd2f0aa03?apiKey=52143d22d68d4caea70948bab45422fb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b872d57346ebf4ae26ac985a9350eda4c4daa62bdacbd51c4ec992ebd2f0aa03?apiKey=52143d22d68d4caea70948bab45422fb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b872d57346ebf4ae26ac985a9350eda4c4daa62bdacbd51c4ec992ebd2f0aa03?apiKey=52143d22d68d4caea70948bab45422fb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b872d57346ebf4ae26ac985a9350eda4c4daa62bdacbd51c4ec992ebd2f0aa03?apiKey=52143d22d68d4caea70948bab45422fb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b872d57346ebf4ae26ac985a9350eda4c4daa62bdacbd51c4ec992ebd2f0aa03?apiKey=52143d22d68d4caea70948bab45422fb&"
                    className="img-28"
                  />
                  <div className="div-124">Securing Success</div>
                  <div className="div-125">
                    The company has a 30-day replacement policy and high
                    retention rate due to competitive payouts and strong brand
                    reputation.
                  </div>
                </span>
              </div>
            </div>
            <div className="column-18">
              <span className="span-52">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e0a29f8cdb2b3924f067e0068251731e6d97fc1d74c9e142a5831fc51a603e29?apiKey=52143d22d68d4caea70948bab45422fb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0a29f8cdb2b3924f067e0068251731e6d97fc1d74c9e142a5831fc51a603e29?apiKey=52143d22d68d4caea70948bab45422fb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0a29f8cdb2b3924f067e0068251731e6d97fc1d74c9e142a5831fc51a603e29?apiKey=52143d22d68d4caea70948bab45422fb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0a29f8cdb2b3924f067e0068251731e6d97fc1d74c9e142a5831fc51a603e29?apiKey=52143d22d68d4caea70948bab45422fb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0a29f8cdb2b3924f067e0068251731e6d97fc1d74c9e142a5831fc51a603e29?apiKey=52143d22d68d4caea70948bab45422fb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0a29f8cdb2b3924f067e0068251731e6d97fc1d74c9e142a5831fc51a603e29?apiKey=52143d22d68d4caea70948bab45422fb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0a29f8cdb2b3924f067e0068251731e6d97fc1d74c9e142a5831fc51a603e29?apiKey=52143d22d68d4caea70948bab45422fb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0a29f8cdb2b3924f067e0068251731e6d97fc1d74c9e142a5831fc51a603e29?apiKey=52143d22d68d4caea70948bab45422fb&"
                  className="img-29"
                />
                <div className="div-126">Beyond Borders</div>
                <div className="div-127">
                  We provide both, flexible full-time and part-time jobs
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="div-128">
          <div className="div-129"></div>
          <span className="span-53">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d900151f52eac085b211234a1cf321823933a58c577aa2bed5992498ca934196?apiKey=52143d22d68d4caea70948bab45422fb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d900151f52eac085b211234a1cf321823933a58c577aa2bed5992498ca934196?apiKey=52143d22d68d4caea70948bab45422fb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d900151f52eac085b211234a1cf321823933a58c577aa2bed5992498ca934196?apiKey=52143d22d68d4caea70948bab45422fb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d900151f52eac085b211234a1cf321823933a58c577aa2bed5992498ca934196?apiKey=52143d22d68d4caea70948bab45422fb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d900151f52eac085b211234a1cf321823933a58c577aa2bed5992498ca934196?apiKey=52143d22d68d4caea70948bab45422fb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d900151f52eac085b211234a1cf321823933a58c577aa2bed5992498ca934196?apiKey=52143d22d68d4caea70948bab45422fb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d900151f52eac085b211234a1cf321823933a58c577aa2bed5992498ca934196?apiKey=52143d22d68d4caea70948bab45422fb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d900151f52eac085b211234a1cf321823933a58c577aa2bed5992498ca934196?apiKey=52143d22d68d4caea70948bab45422fb&"
              className="img-30"
            />
            <div className="div-130">End-to-End Excellence</div>
            <div className="div-131">
              In our hiring process, a job description is shared, matches are
              reviewed, interviews are conducted, and post-hiring support is
              provided by us.
            </div>
          </span>
          <div className="div-132">
            <div className="div-133">
              <div className="column-19">
                <span className="span-54">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/eb62e0dc7990bc3dfe7163a81b21acaec5714b5d599dc6e420fe0100fe84a96b?apiKey=52143d22d68d4caea70948bab45422fb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb62e0dc7990bc3dfe7163a81b21acaec5714b5d599dc6e420fe0100fe84a96b?apiKey=52143d22d68d4caea70948bab45422fb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb62e0dc7990bc3dfe7163a81b21acaec5714b5d599dc6e420fe0100fe84a96b?apiKey=52143d22d68d4caea70948bab45422fb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb62e0dc7990bc3dfe7163a81b21acaec5714b5d599dc6e420fe0100fe84a96b?apiKey=52143d22d68d4caea70948bab45422fb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb62e0dc7990bc3dfe7163a81b21acaec5714b5d599dc6e420fe0100fe84a96b?apiKey=52143d22d68d4caea70948bab45422fb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb62e0dc7990bc3dfe7163a81b21acaec5714b5d599dc6e420fe0100fe84a96b?apiKey=52143d22d68d4caea70948bab45422fb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb62e0dc7990bc3dfe7163a81b21acaec5714b5d599dc6e420fe0100fe84a96b?apiKey=52143d22d68d4caea70948bab45422fb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb62e0dc7990bc3dfe7163a81b21acaec5714b5d599dc6e420fe0100fe84a96b?apiKey=52143d22d68d4caea70948bab45422fb&"
                    className="img-31"
                  />
                  <div className="div-134">Efficiency Redefined</div>
                  <div className="div-135">
                    The platform enables fast hiring without waiting for
                    candidates to reply. We offer affordable alternatives to
                    traditional recruitment methods and provides quality talent.
                  </div>
                </span>
              </div>
              <div className="column-20">
                <span className="span-55">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fff7d7d24bdb57dfc2c029230e54d4435a666ea3d1baa981b64ef295082c64cb?apiKey=52143d22d68d4caea70948bab45422fb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fff7d7d24bdb57dfc2c029230e54d4435a666ea3d1baa981b64ef295082c64cb?apiKey=52143d22d68d4caea70948bab45422fb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fff7d7d24bdb57dfc2c029230e54d4435a666ea3d1baa981b64ef295082c64cb?apiKey=52143d22d68d4caea70948bab45422fb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fff7d7d24bdb57dfc2c029230e54d4435a666ea3d1baa981b64ef295082c64cb?apiKey=52143d22d68d4caea70948bab45422fb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fff7d7d24bdb57dfc2c029230e54d4435a666ea3d1baa981b64ef295082c64cb?apiKey=52143d22d68d4caea70948bab45422fb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fff7d7d24bdb57dfc2c029230e54d4435a666ea3d1baa981b64ef295082c64cb?apiKey=52143d22d68d4caea70948bab45422fb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fff7d7d24bdb57dfc2c029230e54d4435a666ea3d1baa981b64ef295082c64cb?apiKey=52143d22d68d4caea70948bab45422fb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fff7d7d24bdb57dfc2c029230e54d4435a666ea3d1baa981b64ef295082c64cb?apiKey=52143d22d68d4caea70948bab45422fb&"
                    className="img-32"
                  />
                  <div className="div-136">
                    Simplified Contracts
                    <br />
                    Satisfied Partnerships
                  </div>
                  <div className="div-137">
                    The contracts are good and satisfy both parties. We save
                    time and money by providing remote onboarding and IT
                    support.
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="div-138"></div>
        <div className="div-139"></div>
      </span>
    </div>
  );
}

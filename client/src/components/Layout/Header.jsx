function Header() {
  return (
    <>
      <div className="flex-col items-center justify-center bg-blue-300 text-black w-full px-5 py-4">
        <h1 className="text-center">
          Create powerful web or mobile applications effortlessly using CRUD
          operations, all <b>without the need for any backend code</b>
        </h1>
        <div className="text-white mt-2 mb-2">
          <div className="grid grid-cols-1 md:grid-cols-3 mx-4 gap-6">
            <div className=" bg-sky-900 flex flex-col items-center justify-center text-sm sm:text-md md:text-md lg:text-lg xl:text-lg mb-2 rounded-2xl p-4 col-span-1 h-full">
              <h1 className="text-center mb-2 underline">WHAT CAN YOU DO?</h1>
              <h1 className="text-left">
                <p className="mt-3 mb-4">⇒ CREATE</p>
                <p className="mb-4">⇒ READ</p>
                <p className="mb-4">⇒ UPDATE</p>
                <p className="mb-6">⇒ DELETE as you want</p>
                <hr className="border"></hr>
                <p className="mt-6 text-justify tracking-tight">
                  ⇒ Prefix the URLs with your unique REST endpoint and start
                  creating exceptional web applications by making the above CRUD
                  requests !
                </p>
              </h1>
            </div>
            <div className="bg-sky-900 flex flex-col items-start rounded-2xl p-4 col-span-2 overflow-x-auto h-full">
              <div className="text-sm sm:text-md md:text-md lg:text-lg xl:text-lg mb-2 mx-auto">
                <h1 className="text-center mb-6 underline">HOW CAN YOU DO?</h1>
                <table className="border-sky-300 min-w-full w-full">
                  <thead>
                    <tr className="border divide-x divide-sky-300 border-sky-300 text-center ">
                      <th className="p-2">ACTION</th>
                      <th className="p-2">HTTP</th>
                      <th className="p-2">PAYLOAD</th>
                      <th className="p-2">URL</th>
                      <th className="p-2">DESCRIPTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="divide-x divide-sky-300 border border-sky-300 text-center">
                      <td>Create</td>
                      <td>POST</td>
                      <td>json</td>
                      <td className="px-4 text-left">
                        /<span className="italic">resource</span>
                      </td>
                      <td className="p-1 text-left">
                        Create an entity represented by the JSON payload
                      </td>
                    </tr>
                    <tr className="divide-x divide-sky-300 border border-sky-300 text-center">
                      <td>Read</td>
                      <td>GET</td>
                      <td>-</td>
                      <td className="px-4 text-left">
                        /<span className="italic">resource</span>
                      </td>
                      <td className="p-1 text-left">
                        Get all entities from the resource
                      </td>
                    </tr>
                    <tr className="divide-x divide-sky-300 border border-sky-300 text-center">
                      <td>Read</td>
                      <td>GET</td>
                      <td>-</td>
                      <td className="px-4 text-left">
                        /<span className="italic">resource</span>/
                        <span className="italic">id</span>
                      </td>
                      <td className="p-1 text-left">Get a single entity</td>
                    </tr>
                    <tr className="divide-x divide-sky-300 border border-sky-300 text-center">
                      <td>Update</td>
                      <td>PUT</td>
                      <td>json</td>
                      <td className="px-4 text-left">
                        /<span className="italic">resource</span>/
                        <span className="italic">id</span>
                      </td>
                      <td className="p-1 text-left">
                        Update an entitiy with the JSON payload
                      </td>
                    </tr>
                    <tr className="divide-x divide-sky-300 border border-sky-300 text-center">
                      <td>Delete</td>
                      <td>DELETE</td>
                      <td>-</td>
                      <td className="px-4 text-left">
                        /<span className="italic">resource</span>/
                        <span className="italic">id</span>
                      </td>
                      <td className="p-1 text-left">Delete an entity</td>
                    </tr>
                    <tr className="divide-x divide-sky-300 border border-sky-300 text-center">
                      <td>Delete</td>
                      <td>DELETE</td>
                      <td>-</td>
                      <td className="px-4 text-left">
                        /<span className="italic">resource</span>
                      </td>
                      <td className="p-1 text-left">Delete an resource</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-left mt-6">
                  ⇒&lt;resource&gt; can be any REST resource name<br></br>⇒
                  &lt;id&gt; gets automatically generated for every entity you
                  create
                </p>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-center">
          Note: Service is still under development, Instabilities are possible.
        </h1>
      </div>
    </>
  );
}
export default Header;

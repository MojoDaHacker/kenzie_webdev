import React from 'react'

type Props = {}

const Contact = (props: Props) => {
    return (
        <form className="p-4" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="3c9f31f6-1ecf-45d6-9ef9-4cdab8043384" />
            <input type="hidden" name="redirect" value="http://localhost:3005/contact?submitted=true" />
            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <div className="w-full">
                        <label htmlFor="Firstname">First Name</label>
                        <div >
                            <input className="w-full px-1 border-3 border-orange-300 rounded-md" name="Firstname" type="text" required />
                        </div>
                    </div>

                    <div className="w-full">
                        <label htmlFor="Lastname">Last Name</label>
                        <div>
                            <input className="w-full px-1 border-3 border-orange-300 rounded-md" name="LastName" type="text" required />
                        </div>
                    </div>
                </div>

                <div>
                    <label htmlFor="Phone">Phone</label>
                    <div>
                        <input className="px-1 w-full border-3 border-orange-300 rounded-md" name="Phone" type="phone" required />
                    </div>
                </div>

                <div>
                    <label htmlFor="Email">Email</label>
                    <div>
                        <input className="px-1 w-full border-3 border-orange-300 rounded-md" name="Email" type="email" required />
                    </div>
                </div>

                <div>
                    <label htmlFor="Message">Message</label>
                    <textarea className="px-1 w-full border-3 border-orange-300 rounded-md" name="Message" rows={5} cols={33} required />
                </div>
            </div>

            <button type="submit" className="bg-orange-300 w-1/2 m-auto block text-white p-2 rounded-lg">Submit</button>

        </form>
    )
}

export default Contact
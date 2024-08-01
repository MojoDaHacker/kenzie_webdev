'use client'

type Props = {}

const CallToAction = (props: Props) => {
    return (
        <div className="flex flex-col items-center flex-wrap">
            <div className="grid row-auto grid-cols-2">
                <p className="col-span-2 md:col-span-1 md:text-left text-center">Email:</p>
                <p className="col-span-2 md:col-span-1">matthewmckenzie446@gmail.com</p>
                <p className="">Instagram:</p>
                <p className="">a_waitinggreatness</p>
                {/* <p className="">Schedule a talk with me:</p>
                <button>Schedule</button> */}
            </div>
        </div>
    )
}

export default CallToAction
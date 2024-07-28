'use client'

type Props = {}

const CallToAction = (props: Props) => {
    return (
        <div className="flex flex-col items-center">
            <div className="grid grid-cols-2">
                <p className="">Send me an Email:</p>
                <p className="">matthewmckenzie446@gmail.com</p>
                <p className="">Check out my instagram:</p>
                <p className="">a_waitinggreatness</p>
                {/* <p className="">Schedule a talk with me:</p>
                <button>Schedule</button> */}
            </div>
        </div>
    )
}

export default CallToAction
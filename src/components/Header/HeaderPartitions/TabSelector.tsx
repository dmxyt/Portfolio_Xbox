import TabBtn from "../../StylizedElements/tabButton"


export default function TabSelector() {
    return (
        <>
            <section className=" d-flex h6 gap-2 white-text align-items-center
            justify-content-center w-25"
                style={{ "width": "auto" }}>
                <TabBtn href="#" item_name="joystick" key={Math.round(1) * 100} />
                <TabBtn href="#" item_name="joystick" key={Math.round(1) * 100} />
                <TabBtn href="#" item_name="joystick" key={Math.round(1) * 100} />
                <TabBtn href="#" item_name="joystick" key={Math.round(1) * 100} />
                <TabBtn href="#" item_name="joystick" key={Math.round(1) * 100} />
            </section>
        </>
    )
}
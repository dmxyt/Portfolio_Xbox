import TabBtn from "../../StylizedElements/tabButton"

export default function TabSelector() {
    return (
        <>
            <section className=" d-flex h6 gap-2 white-text align-items-center
            justify-content-center w-25"
                style={{ "width": "auto" }}>
                <TabBtn href="myProjects" item_name="joystick" key={Math.round(1) * 100} />
                <TabBtn href="#contacts" item_name="telephone-fill" data-bs-toggle="offcanvas"  key={Math.round(1) * 100} />
                <TabBtn href="competences" item_name="box-seam-fill" key={Math.round(1) * 100} />
                <TabBtn href="professional_experiences" item_name="file-earmark-person" key={Math.round(1) * 100} />
                <TabBtn href="academicFormation" item_name="journal-richtext" key={Math.round(1) * 100} />
            </section>
        </>
    )
}
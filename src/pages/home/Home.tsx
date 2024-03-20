import { Button } from "../../components/button"
import { Dropdown } from "../../components/dropdown"

export const Home = () => {
    return (
        <div className="flex h-[100vh] w-full items-center justify-center">
            <Dropdown>
                <Dropdown.Label>
                    <Button>Test Dropdown</Button>
                </Dropdown.Label>
            </Dropdown>
        </div>
    )
}

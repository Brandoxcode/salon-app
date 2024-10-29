import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import list from "../../../utils/galleryList";

const photos = () => {

    return (
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 pt-5 pl-4">
            {list.map((item, index) => (
                <Card shadow="sm" key={index} isPressable className="">
                    <CardBody className="overflow-visible p-2">
                        <Image
                            isZoomed
                            width="100%"
                            height={400}
                            alt='prueba'
                            className="w-full object-cover"
                            src={item.img}
                        />
                    </CardBody>
                </Card>
            ))}
        </div>
    );
}

export default photos
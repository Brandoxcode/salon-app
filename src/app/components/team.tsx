import Image from "next/image"
import { team, TeamMember } from "../../../utils/data"

const TeamCard = ({ name, role, image, bio }: TeamMember) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-6 mb-2">
            <Image
                className="w-full object-contain"
                width={1000}
                height={1000}
                src={image}
                alt={name}
            />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">{bio}</p>
            </div>
            <div className="pt-4 pb-2 flex justify-center items-center">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2">
                    {role}
                </span>
            </div>
        </div>
    )
}

const Team = () => {
    return (
        <>
            <div className="mb-12 flex justify-center items-center">
                <h1 className="tracking-widest font-medium text-3xl bg-opacity-50">Our awsome team!</h1>
            </div>
            <div className="flex flex-wrap justify-center">
                {team.map((member) => (
                    <TeamCard key={member.name} {...member} />
                ))}
            </div>
        </>
    )
}

export default Team

import { formatDate } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import { Eye } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import Image from 'next/image';
import Link from 'next/link';
import startupType from '@/types/startup.type';

interface Props {
    data: startupType;
}

const StartupListOneCard = ({ data }: Props) => {
    const { _id, _createdAt, views, author, title, description, image, category } = data;

    return (
        <Card className="hover:scale-105 transition-transform duration-300 md:mx-5 mt-10 shadow-xl">
            <CardHeader>
                <div className="flex justify-between">
                    <div className="bg-accent inline-block rounded-3xl px-4">{formatDate(_createdAt.toString())}</div>
                    <div className="flex gap-2">
                        <Eye />
                        {views}
                    </div>
                </div>
                <CardTitle className="py-4 flex justify-between">
                    <div>
                        <div className="text-sm font-normal hover:text-primary/80">
                            <Link href={`/user/${author._id}`}>{author.name}</Link>
                        </div>
                        <div className="py-2 hover:text-primary/80">
                            <Link href={`/startup/${_id}`}>{title}</Link>
                        </div>
                    </div>
                    <Link href={`/user/${author._id}`} className="hover:scale-110 transition-transform duration-300">
                        <Avatar>
                            <AvatarImage src={author.image} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </Link>
                </CardTitle>
                <CardDescription className="line-clamp-2">{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center items-center py-2">
                <Link href={`/user/${author._id}`} className="hover:scale-105 transition-transform duration-300">
                    <Image layout="responsive" width={1} height={32} src={image} alt={title} className="rounded-md" />
                </Link>
            </CardContent>
            <CardFooter className="py-4 flex justify-between">
                <div>
                    <Link href={`/?query=${category.toLowerCase()}`} className="hover:text-primary/80">
                        {category}
                    </Link>
                </div>
                <div>
                    <Button>Details</Button>
                </div>
            </CardFooter>
        </Card>
    );
};
export default StartupListOneCard;

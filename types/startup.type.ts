type startupType = {
    description: string;
    category: string;
    _id: string;
    slug: {
        current: string;
        _type: 'slug';
    };
    _createdAt: string;
    views: number;
    title: string;
    author: {
        _id: string;
        name: string;
        image: string;
        bio: string;
    };
    image: string;
};

export default startupType;

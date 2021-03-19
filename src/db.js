const users = [
    {
        id:'1',
        name:'User 1',
        email:'Mail@gmail.com',
        phone:'03000835872',
    },
    {
        id:'2',
        name:'User 2',
        email:'Mail@gmail.com',
        phone:'03000835872',
    },
    {
        id:'3',
        name:'User 3',
        email:'Mail@gmail.com',
        phone:'03000835872',
    },
]

const posts = [
    {
        id:'1',
        title: 'My 1st post',
        body: 'Here is the post body bla bal bla....',
        author: 1
    },
    {
        id:'2',
        title: 'My 2nd post',
        body: 'Here is the post body bla bal bla....',
        author: 1
    },
    {
        id:'3',
        title: 'My 3rd post',
        body: 'Here is the post body bla bal bla....',
        author: 1
    },
    {
        id:'4',
        title: 'My 4th post',
        body: 'Here is the post body bla bal bla....',
        author: 1
    },
    {
        id:'5',
        title: 'My 5th post',
        body: 'Here is the post body bla bal bla....',
        author: 2
    },
    {
        id:'6',
        title: 'My 6th post',
        body: 'Here is the post body bla bal bla....',
        author: 2
    },
]


const comments = [
    {
        id:'1',
        body: 'This is good....',
        author: 1,
        post: 1
    },
    {
        id:'2',
        body: `Annoying isn't it?`,
        author: 1,
        post: 1
    },
    {
        id:'3',
        body: 'I think the new release is much more stable than the current version. huh!',
        author: 1,
        post: 3
    },
    {
        id:'4',
        body: 'Aparently this looks nice but what about mine idea that was released yesterday?',
        author: 2,
        post: 1
    },
    {
        id:'5',
        body: 'I this is far good than my idea of the concept that includes all the junk of stackoverflow',
        author: 2,
        post: 4
    },
    {
        id:'6',
        body: 'ok than lets get started and build this new plateform which helps people greatly',
        author: 3,
        post: 1
    },
]
const db = {
    users,
    posts,
    comments
}

export { db as default }
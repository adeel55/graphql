import  uuidv4 from 'uuid/v4'

const Mutation = {
    createUser(parent, args, { db }, info){
        if(db.users.some(u => u.email == args.data.email)){
            throw new Error('Sorry email already taken!')
        }
        let user = {
            id: uuidv4(),
            name: args.data.name,
            email: args.data.email,
            phone: args.data.phone,
        }
        db.users.push(user)
        return user
    },
    createPost(parent, args, { db, pubsub }, info){
        if(!db.users.some(u => u.id == args.author)){
            throw new Error('User not found!')
        }
        let post = {
            id: uuidv4(),
            title: args.title,
            body: args.body,
            author: args.author,
        }

        pubsub.publish('post', {
            post:{
                mutation: 'CREATED',
                data: post
            }
        })
        
        db.posts.push(post)
        return post
    },
    createComment(parent, args, { db, pubsub }, info){
        if(!db.users.some(u => u.id == args.author)){
            throw new Error('User not found!')
        }
        if(!db.posts.some(p => p.id == args.post)){
            throw new Error('Post not found!')
        }
        let comment = {
            id: uuidv4(),
            body: args.body,
            author: args.author,
            post: args.post,
        }

        pubsub.publish(`comment_${args.author}`, {
            comment: {
                mutation: 'CREATED',
                data: comment
            }
        })
        
        db.comments.push(comment)
        return comment
    }
}

export { Mutation as default }
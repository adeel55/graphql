const Post = {
    author(parent, args, { db }, info){
        return db.users.find(user => user.id == parent.author)
    },
    comments(parent, args, { db }, info){
        if(args.limit){
            return db.comments.filter(comment => comment.post == parent.id).splice(0,args.limit)
        }
        return db.comments.filter(comment => comment.post == parent.id)
    },
}


export { Post as default }
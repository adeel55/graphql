const Query = {
    // name(){
    //     return 'Muhammad Adeel'
    // }
    users(parent, args, { db }, info){
        if(args.query){
            return db.users.filter((user) => user.name.toLowerCase().includes(args.query.toLowerCase()))
        }
        return db.users
    },
    posts(){
        return db.posts
    },
    comments(){
        return db.comments
    }
}

export { Query as default }
export const userDetailedQuery = ({auth, userId}) => {

    if(userId !== null){
        return [
            {
                collection: 'users',
                doc: userId,
                storeAs: 'profile'
            },
            {
                collection: 'users',
                doc: userId,
                subcollections: [{collection: 'photos'}],
                storeAs: 'photos'
            }
        ]
    }else{
        return [
            {
                collection: 'users',
                doc: auth.uid,
                subcollections: [{collection: 'photos'}],
                storeAs: 'photos'
            }
        ]
    }
}
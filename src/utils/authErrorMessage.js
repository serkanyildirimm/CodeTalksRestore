
const authErrorMessage=(errorCode)=>{
    switch (errorCode) {
        case 'auth/invalid-email':
            return 'gecersiz e-posta adresi'
        case 'auth/user-not-found':
            return 'kullanici bulunamadi.lutfen kayit olunuz.'
        case 'auth/email-already-in-use':
            return 'kullanici var.'
        case 'auth/wrong-password':
            return 'kullanici bulunamadi.e-postanızı veya sifrenizi kontrol ediniz.'
        case 'auth/weak-password':
            return 'lutfen daha uzun bir parola belirleyiniz...'
        default:
            return errorCode;
    }

}

export default authErrorMessage;
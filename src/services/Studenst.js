import db from "../firebase"
import{
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore"
const StudentsRef =collection(db.db,"qlsv");
class Students{
    addStudents = (newSudent)=>{
        return addDoc( StudentsRef, newSudent)
    }
    updateStudents =(id, updatedStudents) =>{
        const studentDoc=doc(db.db, "qlsv", id);
        return updateDoc(studentDoc,updatedStudents)
    };
    deleteStudent =(id) =>{
        const studentDoc =doc(db.db,"qlsv",id)
        return deleteDoc(studentDoc)
        
    };
    getAllStudent =()=>{
        return getDocs(StudentsRef)
    }
    getStudent =(id)=>{
        const studentDoc = doc(db.db, "qlsv", id);

        return getDoc(studentDoc);
    }
}
export default new Students();

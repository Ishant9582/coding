#include<iostream>
#include<fstream>
using namespace std;
class student{
    public:
    string name ;
    int roll;
    string branch ;
    friend ofstream & operator<<(ofstream &ofs , student&s);
};
ofstream &operator<<(ofstream &ofs , student&s){
    ofs<<s.name<<endl;
    ofs<<s.roll<<endl;
    ofs<<s.branch<<endl;
    return ofs ;
}
int main(){
    student s1;
    s1.name = "johny" ; s1.roll = 10 ; s1.branch = "cs";

    
    ofstream ofs("student.txt");
    ofs<<s1 ;
    ofs.close();
}

#include<iostream>
#include<fstream>
using namespace std;
int main(){
    /*ifstream infile ;
    infile.open("myfile.txt"); */
                                            //or
    ifstream infile("myfile.txt")   ;                                
    if(!infile){
        cout<<"file can not be opened"<<endl;
        
    }
    else{
        string str ;
        int x;
        string st ;
        infile>>str>>x>>st ;    
        cout<<str<<" "<<x<<" "<<st<<" " ;
        if(infile.eof()) cout<<"end of file reached" ;
        infile.close();
    }
}

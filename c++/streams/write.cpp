#include<iostream>
#include<fstream>
#include<string>
using namespace std;
int main(){
    ofstream outfile("my.txt",ios::trunc);
    //outfile<<"hello"<endl;           // doubt why not working
    outfile<<24<<endl;
    outfile.close();
}

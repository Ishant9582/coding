#include<iostream>
using namespace std;
string f(string &s ,int idx,int n){
    if(idx==n){
        return "";
    }
    //string curr= " "; for giving spaces between answer which come like output will be b c 
    string curr ;//write like this as first define
    // string curr=s[idx];  we cant write like this as give error
    curr=s[idx] ; // answer is bc 
    return ((s[idx]=='a')?" " : curr)+f(s,idx+1,n);  
 
  
      
   

}
int main(){
    int n=5;
    string s = "abac";
    string p = f(s,0,n);
    cout<<p;
    

}
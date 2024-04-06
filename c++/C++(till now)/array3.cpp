#include<iostream>
using namespace std;
int main(){
    int array[5]={1,2,3,4,5};
    int a;
    cin>>a;
    int find=a;
    int ans;
    for(int i=0;i<(sizeof(array)/sizeof(array[0]));i++){
        if(array[i]==find){
            ans=i;
            
            break;
        }
        else{
            ans=-1;
        }
    }
    cout<<ans;
    
}
#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;
int sort(vector<int> &v){
        int size;
        int zero=0;
        for(int i=0;i<v.size();i++){

            if(v[i]==0){
                zero+=1;
            }
                
        
        }
        for(int i=0;i<v.size();i++){
            if(i<zero){
                v[i]=0;
            }
            else{
                v[i]=1;
            }
        }
}
int main(){

    int n;
    cin>>n;
    
    vector <int> v;
    for(int i=0;i<n;i++){
        int element;
        cin>>element;
        v.push_back(element);

    }
    sort(v);
    for(int i=0;i<v.size();i++){
        cout<<v[i]<<" ";
    }


}
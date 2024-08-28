#include<iostream>
#include<vector>
using namespace std;
int maxones(vector<vector<int>>&v){
    int leftmostone=0;
    int maxonesrow=0;
    int j=v[0].size()-1;
    for(int i=0;i<v.size();i++){
       while(j>=0 && v[i][j]==1){
        leftmostone=j;
        j--;
       }
    }
    return leftmostone;
}
int main(){
    int n,m;
    cin>>n>>m;
    vector<vector<int>>vec(n,vector<int>(m));
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            cin>>vec[i][j];
        }
    }
    int res = maxones(vec);
    cout<<res<<endl;

}
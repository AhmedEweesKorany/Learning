// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std;
int main() {
    int n;
    cin >> n;
    int x_xor = 0 , x;
    
    for (int i = 1; i <= n ; i++){
        x_xor ^= i;
    }
    
    for (int i = 0; i < n-1 ; i++){
        cin >> x ;
        x_xor ^= x;
    }
    
    
    cout << x_xor ;
    
    // int n;
    // cin >> n;
    // int x;
    // int total = 0 , sum = 0;
    
    // for (int i =1 ; i<=n;i++){
    //     total += i;
    // }
    // for (int i =0 ; i < n - 1 ; i++){
    //     cin >> x;
    //     sum += x;
    // }
    
    // cout << (total -sum) ;
    
    return 0;
}
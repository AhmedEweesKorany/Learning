import java.util.Scanner;
public class main {
    public static void main(String[] args) {
     Scanner inp = new Scanner(System.in);
     String seq = inp.next();

     if(seq.length() == 0){
        System.out.println(0);
        return;
     }
     int count = 1;
     int max = 0 ;
     
     for (int i = 1 ; i < seq.length() ; i++){
        if(seq.charAt(i-1) == seq.charAt(i) ){
            count++;
        }else{
            if(count > max){
                max = count;
            }
            count = 1;
        }
     }

     max = Math.max(max, count);
     System.out.println(max);
    }
}
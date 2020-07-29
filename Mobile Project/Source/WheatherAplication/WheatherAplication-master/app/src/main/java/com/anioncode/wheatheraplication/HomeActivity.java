package com.anioncode.wheatheraplication;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;


import androidx.appcompat.app.AppCompatActivity;

import com.google.firebase.auth.FirebaseAuth;

public class HomeActivity extends AppCompatActivity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

    }


    public void weather(View view) {
        Intent redirect = new Intent(HomeActivity.this, WeatherActivity.class);
        startActivity(redirect);
    }
    public void profile(View view) {
        Intent redirect = new Intent(HomeActivity.this, MainActivity.class);
        startActivity(redirect);
    }

    public void maps(View v) {
        //This code redirects to the news activity.
        Intent redirect = new Intent(HomeActivity.this, MapsActivity.class);
        startActivity(redirect);
    }
    public void editprofile(View v) {
        //This code redirects to the news activity.
        Intent redirect = new Intent(HomeActivity.this, EditProfile.class);
        startActivity(redirect);
    }

    public void onNewsClick(View v) {
        //This code redirects to the news activity.
        Intent redirect = new Intent(HomeActivity.this, NewsActivity.class);
        startActivity(redirect);
    }
    public void logout(View view) {
        FirebaseAuth.getInstance().signOut();//logout
        startActivity(new Intent(getApplicationContext(),Login.class));
        finish();
    }

}
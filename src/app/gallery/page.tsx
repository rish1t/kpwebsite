"use client";
import React from 'react'
import { ParallaxScroll } from "../../components/ui/parallax-scroll";

export default function Page(){
  return (
    <div className='min-h-[100vh] py-9 '>
        <ParallaxScroll images={images} className='min-h-[100vh]'/>
    </div>
  );
}

const images = [
  "1vAO7NJlE-s0F54IZPLUA_r2AxTbxw6Jn",
  "1hBgEuzPYYa3H4n7xfQ7kUV5s3LaUjOBI",
  "1ENQokFOSu6Iw5lGVeJ0cUjkl-IRSeMB3",
  "1t82iOz9KGoEhJetTNYTE4YK72y97Xtb2",
  "1pjPxufKGhZozsRW9mrUEB37p9I2TD5-E",
  "14sVoQKecspAoim6ljeump7_hTwjKCyat",
  "1wa8lYuSlz6rSkqglqCUDHzOTa1nISmqG",
  "1TLjmjUMbNi1N1OGY2hjhdk4ST__2I5WP",
  "1rTKZX1h9MkMmVazL3nSFIy71zXDGMyyH",
  "1rTKZX1h9MkMmVazL3nSFIy71zXDGMyyH",
  "1yx92WxEQ2hwNwSMUmfcjdO4TnafeZHq8",
  "16XwWzkzH7CqghYBbjrZsN83Ivl9tEq6d",
  "1H18VydmRiA8tR-_amJ_FP1xKOzFDYmrp",
  "1LbreL3mdsppgLw9rkm08BoA_kp0gwiJ0",
  "1LbreL3mdsppgLw9rkm08BoA_kp0gwiJ0",
  "1uN3MaNF979DverdeaYhpxJBqPe3vK4FI",
  "1cySJ64rD6QCvz_l7GPXxzchXf7ywo3kB",
  "1C3q7uo5RE_Ob-dp6--RrYSVZt6yJABS2",
  "1lFUkB5FXXYNMC-ffkUqmKP1mERHkCIT5",
  "1pHOThu5wEfufAK7fa6lrtM8pYgAxWux3",
  "19WgyJeF0IwaRn8JYGfLBnLyVNzLRKLGu",
  "1bnr1yoRUE9L61l0bhsQ1GqGU5zOFHkOd",
  "1CV7bU00lgOYWTNTaz2ECYHQR2E7t4AjV",
  "1OT8OZR3PqZb2rkjxzk2AuuLh5gNnjk2X",
  "1F8wfVSi6uLMJ5Py_bgS0nZ8_4tTH7IV9",
  "1hB9_f0xL9ViS9i_vCmW_2LpAxN6ZliLA",
  "1ldEjIecuwecKWqrKEqAN3-qnkSEOhkJA",
  "15KPavK1FTm5bNVppuvVEFiBSNTDrJvbl",
  "197DE6CnDJLt8sGRseoOQvIf9xqefrW_F",
  "1ZcREx_w-_0RMlLGm3SN4JFgo1SwzUkSh",
  "1bx13bV4PQuhciap-ObQBqOkkMzfsyzFQ",
  "1fcBh7bqYgZLGw7XHi57KHygPxX9OchGZ",
  "1WWcifMJn6XcIbOpmnD6xxo56Ud0XUfyC",
  "1Eh2Y7OogUNTL41RXx_aE4bcdoQCAyo7x",
  "1bQaDvdmTRRV2WQkEv6hg9bAhv12T5D79",
  "18DGQmXiHRWFPwjZsawl3WJCjv9xy0Fuh",
  "1z-2qWYfXdB-mC-OH01E2CgrJTBFV8Dcf",
  "1qMpVR9zzYzVEBM6bh2yY6cZ_b7ma1Vl5",
  "1D-8QG4p4Np0RgsEzZ412lu2Niievso1N",
  "1Uh55kjOEUGHH0F3kGP9jAFW0yg0uoL34",
  "13huADvE-XisAbnsbqNyPtG-DF_ATD5J2",
  "1OfiFdHGpN185g9tcu9ZK4DvPDV2ePNSU",
  "1L8NpSwDYJ3McAls639f4kTf7zn-Fef8b",
  "17Pqub7oxqY-q-EpFLg5A0tXosCEI2vKU",
  "1gMNaA8VcgjsoI07ZqdJu1CY7OzgYmKTQ",
  "18OVnyRvv864TdJ1Uqf2uoJZiwF73srch",
  "1yB4ywxDL55Sr3Trt6aSirSt6bYzN1AoQ",
  "1VexYuuf45NHfOAhXYEJ7Nqmk3Oet_uCd",
  "1XZIhiwEiqDHIxep5WSqSfWbtpPCUVIKe",
  "15EKaqmIeUVPkLhoh-zF-VRJrNleEDAvF",
  "1Lbl5hBSUXt7Q70S6hQ6iSHexrBZoJcia",
  "1Zo9YyjyKXvBSQRzVlL_WL7rG3j_XCY3o",
  "1-ikcqTqjYqFM59tUEvCxMfwr5erVw2dW",
  "1rUMmQrPB4-vVhTCcpNdIrnA3lGFPexin",
  "1fi9aphHhgjZmpk_FDoXoaWsyt69qT9a-",
  "1qAgiEzuxFq8VdF_Vm7QI5JJ3sO_jn0N4",
  "1-dEbwWk7hAYlugke_aivCTYH9vo5G0oP",
  "1-6HCDdFIjaHq4UpTMVjYad9oqkz9RZjK",
  "1a3e45lEQm0NKJ_11Z2CPAt5mIHIo80IR",
  "1rqkxJWXPB4Rt8c039IGMv7nowo6tN6k3",
  "18IoS727IApdAm_9GWLDdBHKZYNd5h-CL",
  "1QBzAugHNooMze78hyVmESp-3yKfoiLzN",
  "1JaIH7ikvmwnBXRoYUbnKtV8JhHaGT6Dp",
  "1gVLHPEQbnusbWWQrVtWDN3vhGqDeaksR",
  "1ZTbMnqumIDwKh1P16GaHQFS9DZAEtwO6",
  "1zTlhZ69o0nz944-OhKgFGM45vHgBNWRn",
  "1evlTuQMI6FdCZ74znqPrtnPpH6m3dNVV",
  "1bx13bV4PQuhciap-ObQBqOkkMzfsyzFQ"
];

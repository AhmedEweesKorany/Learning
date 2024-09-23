<?php

namespace App\Resolvers;

use App\Model\Order;

class OrderResolver{

    public static function createOrder( $args){
        $order = new Order();
        $order->setAttribute('details', json_encode($args['details']));
        $order->setAttribute('status', $args['status']);
        $order->setAttribute('total', $args['total']);
        $order->save();
        return "Order Created";
    }
}

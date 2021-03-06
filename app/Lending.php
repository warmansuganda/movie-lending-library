<?php

namespace App;

use App\Bases\BaseModel;

class Lending extends BaseModel
{
    protected $table = 'lendings'; // Table name

    /*
     * Defining Fillable Attributes On A Model
     */
    protected $fillable = [
        'movie_id',
        'member_id',
        'lending_date',
        'return_date',
        'returned_date',
        'lateness_charge'
    ];

    protected $dates = ['lending_date', 'return_date', 'returned_date'];

    public function movie()
    {
        return $this->belongsTo('App\Movie', 'movie_id');
    }

    public function member()
    {
        return $this->belongsTo('App\Member', 'member_id');
    }

}

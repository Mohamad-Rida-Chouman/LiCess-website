<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->timestamp('date');
            $table->string('user_email');
            $table->string('model');
            $table->float('sensitivity', 5, 2);
            $table->float('specificity', 5, 2);
            $table->float('accuracy', 5, 2);
            $table->float('mcc', 5, 2);
            $table->float('auc', 5, 2);
            $table->string('fpr');
            $table->string('tpr');
            $table->string('comment');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};

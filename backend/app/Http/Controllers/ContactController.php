<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactFormMail;
use App\Mail\ConfirmationMail;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        // Validez les données du formulaire
        $request->validate([
            'name' => 'required|string',
            'phone' => 'required|int',
            'email' => 'required|email',
            'message' => 'required|string',
        ]);

        // Créez un objet avec les données du formulaire
        $data = [
            'name' => $request->name,
            'phone' => $request->phone,
            'email' => $request->email,
            'message' => $request->message,
        ];

        // Envoyez un e-mail de contact à vous-même
        Mail::to('a31951978@gmail.com')->send(new ContactFormMail($data));

        // Envoyez un e-mail de confirmation à l'utilisateur
        Mail::to($request->email)->send(new ConfirmationMail($data));

        // Répondre avec succès
        return response()->json(['success' => 'Votre message a été envoyé avec succès. Vous recevrez bientôt un e-mail de confirmation.']);
    }
}

'use strict';
import * as vscode from 'vscode';
import * as request from 'request';
class Joke {
    public joke = "";

    public getJoke() {
        const endpoint = 'https://geek-jokes.sameerkumar.website/api';

        request.get(endpoint, (response,body)=> {
            
            this.joke = body.body;

            vscode.window.showInformationMessage(this.joke);

        });

    }
}

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.getJoke', () => {
        let joke = new Joke();

        joke.getJoke();
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
}


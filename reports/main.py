if __name__ == '__main__':
    try:
        if devMode:
            print("Running development server.")
            app.run(host='0.0.0.0', port=50100, debug=True)
        else:
            print("Running production server.")   
            serve(app, host='0.0.0.0', port=50100, threads=4)
    except Exception as e: 
        print("There was an error:", e)

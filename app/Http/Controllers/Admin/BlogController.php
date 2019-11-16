<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $blog = Blog::paginate(10);
        return response([
            'data' => $blog,
        ]);
    }

    /**
     * Display a single of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $blog = Blog::find($id);
        return response([
            'data' => $blog,
            'message' => 'success',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        unset($data['category']);
        // slug genrate
        $slug = \Str::slug($data['title']);
        $count = Blog::whereRaw("slug RLIKE '^{$slug}(-[0-9]+)?$'")->count();
        if ($count) {
            $data['slug'] = $slug . '-' . $count;
        } else {
            $data['slug'] = $slug;
        }

        $data['user_id'] = auth()->user()->id;
        $data['blog_category_id'] = $request->category;
        $blog = Blog::create($data);
        return response([
            'message' => "success",
            'data' => $blog,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $blog = Blog::find($id);

        $data = $request->all();
        unset($data['category']);
        // slug genrate
        $slug = \Str::slug($data['title']);
        $count = Blog::whereRaw("slug RLIKE '^{$slug}(-[0-9]+)?$'")->count();
        if ($count) {
            $data['slug'] = $slug . '-' . $count;
        } else {
            $data['slug'] = $slug;
        }

        $data['user_id'] = auth()->user()->id;
        $data['blog_category_id'] = $request->category;
        $blog->update($data);
        return response([
            'message' => "success",
            'data' => $blog,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $blog = Blog::find($id);
        $blog->delete();
        return response([
            'message' => 'success',
        ]);
    }
}
